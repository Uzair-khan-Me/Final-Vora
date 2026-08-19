import { NextResponse } from 'next/server';
import { runYtDlpJson, validatePublicMediaUrl, type YtDlpFormat } from '@/lib/server/media';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function formatSize(format: YtDlpFormat) {
  return format.filesize || format.filesize_approx || null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const url = await validatePublicMediaUrl(body?.url);
    const info = await runYtDlpJson(url);

    const seen = new Set<string>();
    const formats = (info.formats || [])
      .filter((format) => format.format_id && format.vcodec && format.vcodec !== 'none' && format.acodec && format.acodec !== 'none')
      .sort((a, b) => (b.height || 0) - (a.height || 0) || (formatSize(b) || 0) - (formatSize(a) || 0))
      .filter((format) => {
        const key = `${format.height || 0}-${format.ext || ''}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 12)
      .map((format) => ({
        id: format.format_id!,
        ext: format.ext || 'mp4',
        label: format.height ? `${format.height}p${format.fps && format.fps > 30 ? ` · ${format.fps}fps` : ''}` : format.format_note || 'Video',
        size: formatSize(format),
        width: format.width || null,
        height: format.height || null,
      }));

    const audio = (info.formats || [])
      .filter((format) => format.format_id && format.acodec && format.acodec !== 'none' && (!format.vcodec || format.vcodec === 'none'))
      .sort((a, b) => (formatSize(b) || 0) - (formatSize(a) || 0))[0];

    if (audio?.format_id) {
      formats.push({
        id: audio.format_id,
        ext: audio.ext || 'm4a',
        label: 'Audio only',
        size: formatSize(audio),
        width: null,
        height: null,
      });
    }

    if (!formats.length) throw new Error('No downloadable browser-compatible formats were found for this video.');

    return NextResponse.json({
      media: {
        title: info.title || 'Untitled video',
        uploader: info.uploader || info.extractor_key || 'Unknown creator',
        duration: info.duration || null,
        thumbnail: info.thumbnail || null,
        source: info.extractor_key || 'Web',
        url,
      },
      formats,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not analyze that link.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
