'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Reliability',
    description: 'Every component is built to withstand failure and guarantee delivery.',
  },
  {
    title: 'Consistency',
    description: 'Atomic operations ensure your data and events stay in sync.',
  },
  {
    title: 'Production Readiness',
    description: 'Battle-tested under real workloads. No toy projects.',
  },
  {
    title: 'Simplicity',
    description: 'Clean APIs that integrate without friction into existing systems.',
  },
  {
    title: 'Open Source',
    description: 'Transparent, community-driven development. Always.',
  },
]

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What is Namastack?
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Namastack builds reliable infrastructure primitives for distributed systems.
            We focus on the hard problems so you can focus on your product.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.1,
              }}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-200 hover:border-[var(--primary)]/30 hover:bg-[var(--surface-hover)]"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

