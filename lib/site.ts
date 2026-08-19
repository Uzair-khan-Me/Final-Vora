export const SITE_NAME = 'Final Vora';
export const SITE_TITLE =
  'Final Vora – Video Downloader for Android | Final Vora APK';
export const SITE_DESCRIPTION =
  'Final Vora is a fast, privacy-focused standalone video downloader for Android. Download videos from YouTube, Facebook, TikTok and Instagram with a device-first experience.';

export const SITE_KEYWORDS = [
  'Final Vora',
  'Final Vora APK',
  'Final Vora download',
  'Final Vora Android',
  'Final Vora video downloader',
  'Final Vora app',
  'Final Vora for Android',
  'Final Vora APK download',
  'Vora APK',
  'Vora video downloader',
  'download Final Vora',
  'video downloader for Android',
  'YouTube video downloader',
  'Facebook video downloader',
  'TikTok video downloader',
  'Instagram video downloader',
];

export const APK_URL =
  'https://github.com/Uzair-khan-Me/Final-Vora/releases/download/Android/Final.Vora.apk';

export const APK_SIZE = '160 MB';

export const GITHUB_REPO = 'https://github.com/Uzair-khan-Me/Final-Vora';

export const DEVELOPER_NAME = 'Uzair Ali';
export const DEVELOPER_ROLE = 'Developer of Final Vora';
export const DEVELOPER_PORTFOLIO = 'https://uzairali-18.github.io/Portfolio/';
export const DEVELOPER_EMAIL = 'uzairali10005@gmail.com';

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
