export const SITE_NAME = 'Final Vora';
export const SITE_TITLE =
  'Final Vora – YouTube Video Downloader for Android | Final Vora APK';
export const SITE_DESCRIPTION =
  'Final Vora is a free, privacy-focused video downloader for Android. Download videos from YouTube, Facebook, TikTok & Instagram — right on your device.';

export const SITE_KEYWORDS = [
  'Final Vora',
  'Final Vora APK',
  'Final Vora download',
  'Final Vora Android',
  'Final Vora app',
  'Final Vora for Android',
  'Final Vora APK download',
  'Final Vora video downloader',
  'Vora APK',
  'Vora video downloader',
  'download Final Vora',
  'video downloader',
  'video downloader for Android',
  'Android video downloader',
  'YouTube video downloader',
  'free video downloader',
  'yt video downloader',
  'free yt video downloader',
  'video downloader app',
  'download YouTube videos',
  'Facebook video downloader',
  'TikTok video downloader',
  'Instagram video downloader',
  'yt-dlp alternative',
];

export const APK_URL =
  'https://github.com/Uzair-khan-Me/Final-Vora/releases/download/Android/Final.Vora.apk';

export const APK_SIZE = '160 MB';

export const GITHUB_REPO = 'https://github.com/Uzair-khan-Me/Final-Vora';

export const DEVELOPER_NAME = 'Uzair Ali';
export const DEVELOPER_ROLE = 'Developer of Final Vora';
export const DEVELOPER_EMAIL = 'uzairali10005@gmail.com';
export const DEVELOPER_IMAGE = '/images/uzair-ali.jpg';

export const SUPPORTED_SOURCES = [
  'YouTube',
  'Facebook',
  'TikTok',
  'Instagram',
] as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Download', href: '#download' },
  { label: 'Developer', href: '#developer' },
] as const;

/**
 * Resolves the public site URL. Uses NEXT_PUBLIC_SITE_URL when configured,
 * otherwise falls back to the Vercel preview URL, and finally to the default
 * production domain placeholder.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://finalvora.com';
}
