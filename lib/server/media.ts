import { lookup } from 'node:dns/promises';
import { spawn } from 'node:child_process';
import net from 'node:net';

const PRIVATE_V4 = [
  /^10\./,
  /^127\./,
  /^169\.254\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^0\./,
];

function isPrivateAddress(address: string) {
  if (net.isIPv4(address)) return PRIVATE_V4.some((range) => range.test(address));
  const value = address.toLowerCase();
  return value === '::1' || value === '::' || value.startsWith('fc') || value.startsWith('fd') || value.startsWith('fe80:') || value.startsWith('::ffff:127.');
}

export async function validatePublicMediaUrl(value: unknown): Promise<string> {
  if (typeof value !== 'string' || value.length > 2048) throw new Error('Enter a valid video link.');

  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error('Enter a complete link beginning with http:// or https://.');
  }

  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('Only public HTTP and HTTPS links are supported.');
  }
  if (url.hostname === 'localhost' || url.hostname.endsWith('.local')) {
    throw new Error('Local network links are not supported.');
  }

  let addresses: { address: string }[];
  try {
    addresses = await lookup(url.hostname, { all: true });
  } catch {
    throw new Error('That website could not be reached.');
  }
  if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address))) {
    throw new Error('Private network links are not supported.');
  }
  return url.toString();
}

export type YtDlpFormat = {
  format_id?: string;
  ext?: string;
  format_note?: string;
  height?: number;
  width?: number;
  fps?: number;
  filesize?: number;
  filesize_approx?: number;
  vcodec?: string;
  acodec?: string;
};

export type YtDlpInfo = {
  id?: string;
  title?: string;
  uploader?: string;
  duration?: number;
  thumbnail?: string;
  webpage_url?: string;
  extractor_key?: string;
  formats?: YtDlpFormat[];
};

export function runYtDlpJson(url: string): Promise<YtDlpInfo> {
  return new Promise((resolve, reject) => {
    const child = spawn(/* turbopackIgnore: true */ process.env.YT_DLP_PATH || 'yt-dlp', [
      '--dump-single-json',
      '--no-playlist',
      '--skip-download',
      '--no-warnings',
      '--socket-timeout', '15',
      url,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });

    let stdout = '';
    let stderr = '';
    const timeout = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error('The website took too long to respond. Please try again.'));
    }, 45_000);

    child.stdout.on('data', (chunk: Buffer) => {
      stdout += chunk.toString();
      if (stdout.length > 12_000_000) child.kill('SIGKILL');
    });
    child.stderr.on('data', (chunk: Buffer) => { stderr += chunk.toString(); });
    child.on('error', (error: NodeJS.ErrnoException) => {
      clearTimeout(timeout);
      reject(error.code === 'ENOENT'
        ? new Error('The download engine is not installed on this server. See the deployment guide.')
        : new Error('Could not start the download engine.'));
    });
    child.on('close', (code) => {
      clearTimeout(timeout);
      if (code !== 0) {
        reject(new Error(cleanYtDlpError(stderr)));
        return;
      }
      try {
        resolve(JSON.parse(stdout) as YtDlpInfo);
      } catch {
        reject(new Error('The website returned an unreadable response.'));
      }
    });
  });
}

function cleanYtDlpError(message: string) {
  const line = message.split('\n').find((item) => item.includes('ERROR:'));
  return (line?.replace(/^.*ERROR:\s*/, '') || 'This video could not be read. It may be private or restricted.').slice(0, 300);
}

export function safeFormatId(value: string | null) {
  if (!value || !/^[a-zA-Z0-9_.-]{1,80}$/.test(value)) throw new Error('Choose a valid format.');
  return value;
}

export function safeExtension(value: string | null) {
  return value && /^(mp4|webm|m4a|mp3|mov)$/.test(value) ? value : 'mp4';
}
