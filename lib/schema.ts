import {
  APK_SIZE,
  APK_URL,
  DEVELOPER_NAME,
  DEVELOPER_PORTFOLIO,
  SITE_DESCRIPTION,
  SITE_NAME,
  getSiteUrl,
} from '@/lib/site';

/**
 * Structured data (JSON-LD) objects. Kept free of invented facts: no ratings,
 * review counts, download counts or prices that have not been provided.
 */

const siteUrl = getSiteUrl();

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'en-US',
  publisher: {
    '@id': `${siteUrl}/#person`,
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: DEVELOPER_NAME,
  url: DEVELOPER_PORTFOLIO,
  jobTitle: 'Software Developer',
  description:
    'Developer of Final Vora, a standalone video downloader for Android.',
  sameAs: [DEVELOPER_PORTFOLIO],
  knowsAbout: ['Software Development', 'Search Engine Optimization'],
};

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${siteUrl}/#software`,
  name: SITE_NAME,
  alternateName: ['Final Vora APK', 'Final Vora Video Downloader'],
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'Video Downloader',
  operatingSystem: 'Android',
  description: SITE_DESCRIPTION,
  url: siteUrl,
  downloadUrl: APK_URL,
  fileSize: APK_SIZE,
  installUrl: APK_URL,
  keywords:
    'Final Vora, Final Vora APK, video downloader, Android video downloader, YouTube video downloader, free video downloader',
  author: { '@id': `${siteUrl}/#person` },
  publisher: { '@id': `${siteUrl}/#person` },
  creator: { '@id': `${siteUrl}/#person` },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Device-first privacy',
    'On-device video processing',
    'Fast downloads',
    'Simple workflow',
    'Standalone application',
    'Built with Kotlin',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Final Vora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Final Vora is a standalone video downloader for Android that lets you save videos from YouTube, Facebook, TikTok, and Instagram. It is built in Kotlin and designed so that video processing happens on your own device.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Final Vora APK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Final Vora APK is the Android installation package for the app. It is distributed as a direct download from the official GitHub Releases page, so you download and install it on your device yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I download Final Vora for Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the Download APK button on the Final Vora website. It takes you to the GitHub-hosted APK (about 160 MB). Download the file, then open it on your Android device to install it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Final Vora support YouTube, Facebook, TikTok and Instagram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Final Vora is designed to download videos from YouTube, Facebook, TikTok, and Instagram.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Final Vora download YouTube videos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. YouTube is one of the platforms Final Vora supports, alongside Facebook, TikTok, and Instagram.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Final Vora a free video downloader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Final Vora APK is free to download from the official GitHub Releases page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Final Vora the same as yt-dlp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. yt-dlp is a free, open-source command-line video downloader for desktops and servers. Final Vora is a standalone Android app built with Kotlin that gives you a simple, on-device workflow on your phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose an app instead of a command-line tool like yt-dlp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you want to download videos on your phone without using a terminal, Final Vora offers a tap-to-download experience. Command-line tools like yt-dlp are powerful, but they are built for desktops and scripting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Final Vora available for Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not yet. A Windows version is coming soon. The Android app is available now.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Final Vora available for Linux?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not yet. A Linux version is coming soon. The Android app is available now.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Final Vora developed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Final Vora is developed in Kotlin as a native Android application. The APK is distributed through the project\u2019s GitHub Releases page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Final Vora process videos on the device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Final Vora is designed as a standalone application, and its workflow is centered around processing on your own device rather than on a remote server.',
      },
    },
  ],
};

export const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [softwareAppSchema, faqSchema],
};

export const siteWideJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [webSiteSchema, personSchema],
};
