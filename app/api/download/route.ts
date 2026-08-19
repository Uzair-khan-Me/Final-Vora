import { spawn } from 'node:child_process';
import { safeExtension, safeFormatId, validatePublicMediaUrl, ytDlpRuntimeArgs } from '@/lib/server/media';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

const MIME: Record<string, string> = {
  mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', m4a: 'audio/mp4', mp3: 'audio/mpeg',
};

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const url = await validatePublicMediaUrl(params.get('url'));
    const format = safeFormatId(params.get('format'));
    const ext = safeExtension(params.get('ext'));

    const child = spawn(/* turbopackIgnore: true */ process.env.YT_DLP_PATH || 'yt-dlp', [
      ...ytDlpRuntimeArgs(),
      '--no-playlist',
      '--no-warnings',
      '--no-progress',
      '--socket-timeout', '20',
      '--format', format,
      '--output', '-',
      url,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });

    let started = false;
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        child.stdout.on('data', (chunk: Buffer) => {
          started = true;
          controller.enqueue(new Uint8Array(chunk));
        });
        child.stdout.on('end', () => controller.close());
        child.on('error', (error) => controller.error(error));
        child.on('close', (code) => {
          if (code !== 0 && !started) controller.error(new Error('Download failed.'));
        });
      },
      cancel() { child.kill('SIGTERM'); },
    });

    request.signal.addEventListener('abort', () => child.kill('SIGTERM'));
    // Drain diagnostics so the child process cannot block on a full stderr pipe.
    child.stderr.resume();

    return new Response(stream, {
      headers: {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="final-vora-download.${ext}"`,
        'Cache-Control': 'private, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Download failed.' },
      { status: 400 },
    );
  }
}
