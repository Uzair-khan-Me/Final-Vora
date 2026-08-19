import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt =
  'Final Vora - a free, private video downloader for Android';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const LOGO = 'data:image/png;base64,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';

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            src={LOGO}
            width={72}
            height={76}
            alt=""
            style={{ objectFit: 'contain' }}
          />
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
            marginTop: '48px',
            fontSize: '70px',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            maxWidth: '940px',
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
            marginTop: '24px',
            fontSize: '30px',
            lineHeight: 1.4,
            color: '#a1a1b5',
            maxWidth: '880px',
          }}
        >
          A free, private video downloader for Android. YouTube, Facebook,
          TikTok, Instagram.
        </div>

        {/* CTA pill + tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            marginTop: '52px',
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
