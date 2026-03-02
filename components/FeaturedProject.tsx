'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Solves the Dual-Write Problem',
    description:
      'Eliminates the risk of writing to a database and publishing an event as two separate, non-atomic operations.',
  },
  {
    title: 'Reliable Event Delivery',
    description:
      'Guarantees that every database change is followed by a corresponding event, even when services crash or restart.',
  },
  {
    title: 'Built for Microservices',
    description:
      'Designed from the ground up for distributed architectures where inter-service communication must be consistent.',
  },
  {
    title: 'Production Ready',
    description:
      'Battle-tested in production environments. Handles retries, ordering, and idempotency out of the box.',
  },
  {
    title: 'Spring Boot Native',
    description:
      'First-class Spring Boot integration. Auto-configuration, starter dependencies, and familiar programming model.',
  },
  {
    title: 'Community Supported',
    description:
      'Open source with ~300 GitHub stars and an active community of contributors and users.',
  },
]

export default function FeaturedProject() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-6"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--primary)] mb-3">
            Featured Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Namastack Outbox
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            An open-source transactional outbox implementation for Spring Boot that
            guarantees atomic database and message publishing operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.08,
              }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-[0_0_24px_rgba(255,222,89,0.06)]"
            >
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <motion.a
            href="/outbox"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-black font-semibold rounded-lg text-base"
            whileHover={{ scale: 1.05, backgroundColor: '#ffe680' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Read Documentation
            <span aria-hidden="true">→</span>
          </motion.a>

          <motion.a
            href="https://github.com/namastack/namastack-outbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[var(--border)] text-white font-medium rounded-lg text-base hover:border-[var(--muted)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            View on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

