import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProject from '../components/FeaturedProject'
import Reliability from '../components/Reliability'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Namastack — Reliable event-driven architecture',
  description: 'Namastack Outbox: transactional outbox for Spring Boot. Reliable delivery, seamless integration, production-ready.',
  openGraph: {
    title: 'Namastack',
    description: 'Reliable event-driven architecture for Spring Boot',
    url: 'https://www.namastack.io',
    images: [
      {
        url: 'https://www.namastack.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Namastack — Reliable event-driven architecture',
      },
      {
        url: 'https://www.namastack.io/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Namastack — Reliable event-driven architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.namastack.io/og-image.png','https://www.namastack.io/og-image.svg'],
  },
}

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Reliability />
      <CTA />
      <Footer />
    </>
  )
}