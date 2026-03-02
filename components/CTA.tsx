'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--surface)] border-t border-b border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Build reliable event-driven systems with confidence.
          </h2>
          <p className="text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto">
            Get started with Namastack Outbox and eliminate the dual-write problem
            in your microservices today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Explore on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

