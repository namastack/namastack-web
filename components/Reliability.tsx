'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Distributed Systems Are Complex',
    description:
      'Coordinating state across services introduces failure modes that monoliths never face. Every network call is a potential point of failure.',
  },
  {
    title: 'The Dual-Write Problem',
    description:
      'Writing to a database and publishing a message are two separate operations. If either fails, your system state becomes inconsistent.',
  },
  {
    title: 'Event Loss Is Silent',
    description:
      'Lost events don\'t throw exceptions. They silently corrupt downstream state, leading to bugs that are nearly impossible to trace.',
  },
  {
    title: 'Data Corruption Compounds',
    description:
      'One missed event cascades through dependent services. By the time you notice, recovery requires manual intervention across multiple systems.',
  },
]

export default function Reliability() {
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
            Why Reliability Matters
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            In distributed systems, consistency isn't optional — it's the foundation
            everything else is built on.
          </p>
        </motion.div>

        <div className="space-y-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.1,
              }}
              className="flex gap-5 items-start rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-200 hover:border-[var(--primary)]/20"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mt-0.5">
                <span className="text-[var(--primary)] text-lg font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {problem.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

