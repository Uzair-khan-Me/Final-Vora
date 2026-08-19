import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt =
  'Final Vora - a fast, private, standalone video downloader for Android';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 96px',
          backgroundColor: '#0a0a12',
          backgroundImage:
            'radial-gradient(1000px 500px at 20% -10%, rgba(139,92,246,0.30), transparent 60%), radial-gradient(800px 400px at 90% 110%, rgba(56,189,248,0.16), transparent 60%)',
          color: '#ffffff',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              backgroundImage: 'linear-gradient(135deg, #8b5cf6, #4f46e5)',
              fontSize: '34px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            V
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '34px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Final Vora
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            marginTop: '56px',
            fontSize: '72px',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            maxWidth: '920px',
          }}
        >
          Download videos.
          <span
            style={{
              marginLeft: '18px',
              backgroundImage:
                'linear-gradient(90deg, #c4b5fd, #a5b4fc, #7dd3fc)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Keep them yours.
          </span>
        </div>

        {/* Subhead */}
        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: '30px',
            lineHeight: 1.4,
            color: '#a1a1b5',
            maxWidth: '880px',
          }}
        >
          A fast, private, standalone video downloader for Android. YouTube,
          Facebook, TikTok, Instagram.
        </div>

        {/* CTA pill + tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            marginTop: '56px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 30px',
              borderRadius: '16px',
              backgroundImage: 'linear-gradient(90deg, #7c3aed, #4f46e5)',
              fontSize: '26px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Download APK - Android - 160 MB
          </div>
          <div style={{ display: 'flex', fontSize: '24px', color: '#6b6b80' }}>
            Your videos. Your device. Your control.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
