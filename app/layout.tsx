import type {Metadata} from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const SITE_URL = 'https://www.namastack.io';
const OG_IMAGE = SITE_URL + '/og-image-v3.png';

export const metadata: Metadata = {
  title: {
    default: 'Namastack',
    template: '%s · Namastack',
  },
  description: 'Namastack builds open-source infrastructure for reliable event-driven systems.',
  keywords: ['namastack', 'outbox pattern', 'spring boot', 'event-driven architecture', 'microservices', 'transactional outbox', 'distributed systems', 'reliable messaging'],
  authors: [{name: 'Roland Beisel', url: 'mailto:info@rolandbeisel.de'}],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Namastack',
    description: 'Reliable event-driven architecture for Spring Boot',
    url: SITE_URL,
    siteName: 'Namastack',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Namastack — Reliable event-driven architecture for Spring Boot',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namastack',
    description: 'Reliable event-driven architecture for Spring Boot',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

// Add viewport export for themeColor (Next.js recommends placing themeColor under viewport)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#ffde59',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Namastack",
    "url": SITE_URL,
    "logo": OG_IMAGE,
    "sameAs": [
      "https://github.com/namastack",
      "https://github.com/namastack/namastack-outbox",
      "https://www.linkedin.com/company/namastack"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Namastack",
    "url": SITE_URL,
    "description": "Reliable event-driven architecture for Spring Boot",
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    }
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    "name": "Namastack Outbox",
    "url": "https://github.com/namastack/namastack-outbox",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cross-platform",
    "description": "An open-source transactional outbox implementation for Spring Boot that guarantees atomic database and message publishing operations.",
    "author": {
      "@id": `${SITE_URL}/#organization`
    },
    "license": "https://www.apache.org/licenses/LICENSE-2.0.html",
    "programmingLanguage": "Java",
    "runtimePlatform": "Spring Boot",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
      <html lang="en">
      <GoogleAnalytics gaId="G-7T0WYS15SK" />
      <body className="antialiased cc--elegant-black">
      {/* Structured data for SEO */}
      <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}}
      />
      <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
      />
      <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: JSON.stringify(softwareJsonLd)}}
      />
      {children}
      </body>
      </html>
  );
}
