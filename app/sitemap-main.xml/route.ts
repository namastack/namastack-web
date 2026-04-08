import { NextResponse } from 'next/server'

const SITE_URL = 'https://www.namastack.io'

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  const pages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: 'legal', priority: '0.3', changefreq: 'yearly' },
  ]

  const urls = pages
    .map(({ path, priority, changefreq }) => {
      const loc = path === '' ? SITE_URL : `${SITE_URL}/${path}`
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}

