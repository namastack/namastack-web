import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProject from '../components/FeaturedProject'
import Reliability from '../components/Reliability'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliable Event-Driven Architecture for Spring Boot — Namastack',
  description: 'Namastack delivers production-ready infrastructure for event-driven systems - resilient, observable, and easy to integrate with Spring Boot and modern microservices, empowering teams to ship reliable distributed applications.',
  alternates: {
    canonical: 'https://www.namastack.io',
  },
  openGraph: {
    title: 'Namastack — Reliable Event-Driven Architecture for Spring Boot',
    description: 'Namastack delivers production-ready infrastructure for event-driven systems - resilient, observable, and easy to integrate with Spring Boot and modern microservices, empowering teams to ship reliable distributed applications.',
    url: 'https://www.namastack.io',
    images: [
      {
        url: 'https://www.namastack.io/og-image-v3.png',
        width: 1200,
        height: 630,
        alt: 'Namastack — Reliable event-driven architecture for Spring Boot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namastack — Reliable Event-Driven Architecture for Spring Boot',
    description: 'Namastack delivers production-ready infrastructure for event-driven systems - resilient, observable, and easy to integrate with Spring Boot and modern microservices.',
    images: ['https://www.namastack.io/og-image-v3.png'],
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