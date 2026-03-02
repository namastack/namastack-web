'use client'

import { motion } from 'framer-motion'

const features = [
  { title: "Reliable Event Delivery", desc: "Avoid dual writes and lost messages." },
  { title: "Seamless Spring Boot Integration", desc: "Plug & play with your services." },
  { title: "Open Source & Community Driven", desc: "300+ GitHub stars and growing." },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Namastack Outbox?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 p-6 rounded shadow-lg text-center hover:translate-y-[-6px] transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}