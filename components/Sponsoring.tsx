'use client'

import { motion } from 'framer-motion'
import { WrenchIcon, BoltIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const benefits = [
	{
		icon: WrenchIcon,
		text: 'Long-term maintenance',
	},
	{
		icon: BoltIcon,
		text: 'Faster bug fixes',
	},
	{
		icon: RocketLaunchIcon,
		text: 'Continued feature development',
	},
]

export default function Sponsoring() {
	return (
		<section id="sponsoring" className="relative py-24 sm:py-32 overflow-hidden">
			{/* Gradient background */}
			<div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--surface)] to-[var(--background)]" />
			{/* Subtle radial glow */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,222,89,0.06)_0%,_transparent_70%)]" />

			<div className="relative max-w-5xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="text-center mb-14"
				>
					<span className="inline-block text-sm font-medium tracking-widest uppercase text-[var(--primary)] mb-4">
						Open Source
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
						Sponsor Namastack Outbox
					</h2>
					<p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
						Namastack Outbox is open source and maintained independently. If your
						company uses Namastack Outbox in production, sponsoring helps ensure
						reliability and long-term stability for your systems.
					</p>
				</motion.div>

				{/* Benefits */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-40px' }}
					transition={{
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
						delay: 0.15,
					}}
					className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-6"
				>
					{benefits.map((b, i) => {
						const Icon = b.icon
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
								className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 w-full sm:w-auto transition-colors duration-200 hover:border-[var(--primary)]/30"
							>
								<Icon
									className="h-7 w-7 text-yellow-400 shrink-0"
									aria-hidden="true"
								/>
								<span className="text-white font-medium">{b.text}</span>
							</motion.div>
						)
					})}
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-center text-[var(--muted)] text-sm mb-14"
				>
					Running this in production? Sponsoring ensures faster fixes and ongoing
					maintenance.
				</motion.p>

				{/* Company CTA card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-40px' }}
					transition={{
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
						delay: 0.3,
					}}
					className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--surface)] p-8 sm:p-10 max-w-2xl mx-auto text-center"
				>
					<h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
						For Companies
					</h3>
					<p className="text-[var(--muted)] mb-4 leading-relaxed">
						Get visibility, priority support, and help shape the roadmap. Invest in
						the infrastructure your team depends on.
					</p>
					<p className="text-sm text-[var(--muted)]/70 mb-8">
						Companies typically sponsor between €100–€1,000/month depending on
						their usage.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<motion.a
							href="https://liberapay.com/namastack"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 w-full sm:w-72 justify-center px-8 py-3.5 bg-[var(--primary)] text-black font-semibold rounded-lg text-base hover:bg-yellow-300 transition-colors duration-200"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
						>
							❤️ Sponsor the Project
						</motion.a>

						<motion.a
							href="mailto:sponsor@namastack.io"
							className="inline-flex items-center gap-2 w-full sm:w-72 justify-center px-8 py-3.5 bg-[var(--primary)] text-black font-semibold rounded-lg text-base hover:bg-yellow-300 transition-colors duration-200"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
						>
							✉️ Custom Sponsorship
						</motion.a>
					</div>
				</motion.div>
				{/* Individual Sponsorships */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-40px' }}
					transition={{
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
						delay: 0.4,
					}}
					className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--surface)] p-8 sm:p-10 max-w-2xl mx-auto text-center mt-10"
				>
					<h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
						For Individuals
					</h3>
					<p className="text-[var(--muted)] mb-4 leading-relaxed">
						Love Namastack? Support the project as an individual and help keep it
						thriving!
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
						<motion.a
							href="https://www.buymeacoffee.com/namastack"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 w-full sm:w-72 justify-center px-8 py-3.5 bg-yellow-400 text-black font-semibold rounded-lg text-base shadow hover:bg-yellow-300 transition-colors duration-200"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
						>
							☕ Buy Me a Coffee
						</motion.a>
						<motion.a
							href="https://liberapay.com/namastack"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 w-full sm:w-72 justify-center px-8 py-3.5 bg-yellow-400 text-black font-semibold rounded-lg text-base shadow hover:bg-yellow-300 transition-colors duration-200"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
						>
							💛 Liberapay
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
