'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import VantaBackground from "../components/VantaBackground";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // As we scroll from 0 → 60% of the hero, content fades and moves
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={heroRef}>
      <VantaBackground
        minHeight="100vh"
        options={{
          color: 0xa89060,
          backgroundColor: 0x0a0a0f,
          mouseControls: true,
          touchControls: true,
        }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <section className="relative w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
            className="text-center px-6 max-w-3xl"
          >
            {/* Scroll-linked wrapper: fades out, moves up, scales down */}
            <motion.div style={{ opacity, y, scale }}>
              <picture className="mx-auto mb-8 block w-40 sm:w-56 md:w-72 lg:w-96">
                <source srcSet="/namastack_logo.png" type="image/png" />
                <motion.img
                  src="/namastack_logo.svg"
                  alt="Namastack Logo"
                  className="w-full h-auto block"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={animate ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </picture>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Namastack
              </h1>

              <p className="text-xl sm:text-2xl text-[var(--primary)] font-medium mb-3">
                Reliable foundations for event-driven systems.
              </p>

              <p className="text-base sm:text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto">
                Open-source infrastructure tools for modern distributed applications.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/outbox"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-black font-semibold rounded-lg text-base"
                  whileHover={{ scale: 1.05, backgroundColor: '#ffe680' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore Outbox
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
              </div>
            </motion.div>
          </motion.div>
        </section>
      </VantaBackground>
    </div>
  )
}