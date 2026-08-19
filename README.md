# Final Vora Web

A browser-based version of Final Vora. Paste a public media link, inspect the available combined video/audio formats, and download the selected file.

## Features

- Responsive Next.js web interface
- Public link analysis and format discovery via `yt-dlp`
- Direct streamed downloads (files are not retained by the app)
- Video quality and audio-only choices when the source provides them
- URL and DNS validation that blocks local/private network targets
- Docker deployment with `yt-dlp` and FFmpeg included

## Run locally

The server needs current versions of [yt-dlp](https://github.com/yt-dlp/yt-dlp) and FFmpeg on `PATH`.

```bash
npm install
python3 -m pip install --user -U yt-dlp
npm run dev
```

Open http://localhost:3000. Set `YT_DLP_PATH` if the executable has a custom location.

## Recommended deployment

Use Docker because ordinary static hosting and most short-lived serverless functions cannot run long media downloads.

```bash
docker build -t final-vora-web .
docker run --rm -p 3000:3000 final-vora-web
```

Deploy that image to a container host with adequate bandwidth and request duration limits. The site is **not a fully static Vercel deployment**: `/api/info` and `/api/download` execute server-side.

## Responsible use

Download only media you created, media in the public domain, or media you have permission to save. Platform terms, copyright rules, authentication, region restrictions, and DRM still apply. Final Vora does not bypass DRM or access private videos.

## Privacy

No account or application database is used. A submitted URL is sent to this server so `yt-dlp` can retrieve metadata and stream the requested media. Operators should configure infrastructure access-log retention according to their own privacy policy.

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS, yt-dlp, and FFmpeg.
