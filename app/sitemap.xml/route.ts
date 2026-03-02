import { NextResponse } from 'next/server'

const SITE_URL = 'https://www.namastack.io'

export async function GET() {
  const pages = [
    '',
    'outbox',
    'legal',
  ]

  const urls = pages
    .map((p) => {
      const path = p === '' ? '' : `/${p}`
      const url = `${SITE_URL}${path}`
      const lastmod = '2026-03-02' // current date
      return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
