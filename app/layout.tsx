import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = 'https://www.namastack.io'; // Update to your production URL

export const metadata: Metadata = {
  title: {
    default: 'Namastack',
    template: '%s · Namastack',
  },
  description: 'Reliable event-driven architecture for Spring Boot',
  keywords: ['namastack', 'outbox', 'spring boot', 'event-driven', 'microservices', 'transactional outbox'],
  authors: [{ name: 'Roland Beisel', url: 'mailto:info@rolandbeisel.de' }],
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
        url: SITE_URL + '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Namastack — Reliable event-driven architecture',
      },
      {
        url: SITE_URL + '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Namastack Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namastack',
    description: 'Reliable event-driven architecture for Spring Boot',
    images: [SITE_URL + '/og-image.png', SITE_URL + '/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    "name": "Namastack",
    "url": SITE_URL,
    "logo": SITE_URL + '/og-image.svg',
    "sameAs": [
      "https://github.com/namastack/namastack-outbox"
    ]
  };

  return (
    <html lang="en">
      <body className="antialiased cc--elegant-black">
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
