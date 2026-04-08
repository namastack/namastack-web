import { NextResponse } from 'next/server'

const SITE_URL = 'https://www.namastack.io'

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  // This is a sitemap INDEX — it references both the main site sitemap
  // and the Docusaurus /outbox sitemap (which Docusaurus generates automatically).
  // Google will crawl all referenced sitemaps from this single entry point.
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/outbox/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
