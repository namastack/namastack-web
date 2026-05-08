'use client'

import { motion } from 'framer-motion'

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
)

export default function Sponsor() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,222,89,0.3), transparent)' }}
          />

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-8">
            <HeartIcon className="w-5 h-5 text-[var(--primary)]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Support the Work
          </h2>

          <p className="text-[var(--muted)] leading-relaxed mb-4 max-w-lg mx-auto">
            Namastack Outbox started as a passion project — born from a problem I kept running
            into: reliable event publishing in distributed systems is much harder than it looks.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-10 max-w-lg mx-auto">
            A lot of time goes into building, maintaining, and documenting this library. If it&#39;s
            saved your team time or given you confidence in your architecture, sponsoring is a
            meaningful way to give back. Every contribution — no matter the size — directly funds
            better documentation, new integrations, and long-term stability in the Spring ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://github.com/sponsors/namastack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-black font-semibold rounded-lg text-base"
              whileHover={{ scale: 1.05, backgroundColor: '#ffe680' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <HeartIcon className="w-4 h-4" />
              Become a Sponsor
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
