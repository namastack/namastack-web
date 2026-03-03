import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProject from '../components/FeaturedProject'
import Reliability from '../components/Reliability'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Namastack — Reliable event-driven architecture',
  description: 'Namastack delivers production-ready infrastructure for event-driven systems - resilient, observable, and easy to integrate with Spring Boot and modern microservices, empowering teams to ship reliable distributed applications.',
  openGraph: {
    title: 'Namastack',
    description: 'Namastack delivers production-ready infrastructure for event-driven systems - resilient, observable, and easy to integrate with Spring Boot and modern microservices, empowering teams to ship reliable distributed applications.',
    url: 'https://www.namastack.io',
    images: [
      {
        url: 'https://www.namastack.io/og-image-v2.png',
        width: 2066,
        height: 1350,
        alt: 'Namastack — Reliable event-driven architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.namastack.io/og-image-v2.png'],
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