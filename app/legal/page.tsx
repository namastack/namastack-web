import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notice – Namastack',
  description: 'Legal notice, privacy policy, and licensing information for Namastack.',
  openGraph: {
    title: 'Legal Notice – Namastack',
    description: 'Legal notice, privacy policy, and licensing information for Namastack.',
    url: 'https://www.namastack.io/legal',
    images: [
      {
        url: 'https://www.namastack.io/og-image-v3.png',
        width: 1200,
        height: 630,
        alt: 'Namastack Legal',
      },
    ],
  },
}

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-white transition-colors mb-12"
        >
          ← Back to Home
        </a>

        {/* ── Legal Notice / Impressum ── */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Legal Notice / Impressum
        </h1>

        <p className="text-[var(--muted)] leading-relaxed mb-2">
          <strong className="text-white">Namastack Outbox for Spring Boot</strong> is Free and Open Source Software.
          The project is maintained by <strong className="text-white">Roland Beisel</strong>, who is responsible for its ongoing development.
          Namastack Outbox for Spring Boot provides a robust and reliable solution for event-driven message
          handling and outbox pattern implementations in modern applications.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          The project is part of a broader open-source initiative and welcomes contributions, feedback, and
          voluntary donations to support its development and sustainability.
        </p>
        <p className="text-sm text-[var(--muted)] italic mb-10">Last updated: March 2026</p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── § 5 TMG ── */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Information according to § 5 TMG and § 18 Abs. 2 MStV
        </h2>
        <address className="not-italic text-[var(--muted)] leading-relaxed mb-4">
          <strong className="text-white">Roland Beisel</strong><br />
          Ober-Eschbacher Str. 42<br />
          61352 Bad Homburg<br />
          <a href="mailto:info@rolandbeisel.de" className="text-[var(--primary)] hover:underline">info@rolandbeisel.de</a><br />
          <a href="tel:+4917668639673" className="text-[var(--primary)] hover:underline">+49 176 68639673</a>
        </address>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          <strong className="text-white">Namastack Outbox for Spring Boot</strong> is an open-source project maintained by <strong className="text-white">namastack.io</strong>.
          It is non-commercial in nature and accepts voluntary donations to support its development.
        </p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── Hosting Provider ── */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Hosting Provider
        </h2>
        <p className="text-[var(--muted)] leading-relaxed mb-2">Our website is hosted on:</p>
        <p className="text-[var(--muted)] leading-relaxed mb-2">
          <strong className="text-white">Vercel Inc.</strong><br />
          440 N Barranca Ave #4133, Covina, CA 91723, USA
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          Data may be transmitted to servers in the United States. Vercel participates in the EU–U.S. Data Privacy Framework.
        </p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── Datenschutzerklärung ── */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Datenschutzerklärung (German Privacy Policy)
        </h1>
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          Im Folgenden informieren wir Sie über die Verarbeitung personenbezogener Daten auf dieser Website.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Hosting durch Vercel
        </h2>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          Unsere Website wird bei Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet.
          Dabei kann es zu einer Übertragung personenbezogener Daten in die USA kommen.
          Vercel ist nach dem EU-US Data Privacy Framework zertifiziert.
        </p>

        <hr className="border-[var(--border)] mb-10" />

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Google Analytics 4
        </h2>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Unsere Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited
          („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics ermöglicht uns,
          das Nutzerverhalten auf unserer Website zu analysieren und damit unser Angebot zu verbessern.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Google Analytics 4 nutzt Cookies oder vergleichbare Technologien, um Informationen über Ihre Nutzung
          der Website zu erfassen und an Google zu übertragen. Google anonymisiert IP-Adressen standardmäßig,
          sodass Ihre vollständige IP-Adresse nicht gespeichert wird.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          Sie können Ihre Einwilligung jederzeit über das Cookie-Banner widerrufen.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Es kann nicht ausgeschlossen werden, dass Daten in die USA übertragen und dort verarbeitet werden.
          Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert, wodurch ein angemessenes
          Datenschutzniveau gewährleistet ist.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Wir haben mit Google einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Die von Google verarbeiteten Daten werden standardmäßig nach 2 Monaten gelöscht bzw. anonymisiert,
          sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie Ihre
          Cookie-Einstellungen ändern und die Einwilligung für Statistik-Cookies widerrufen. Zusätzlich können
          Sie das folgende Browser-Plugin installieren:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline break-all"
          >
            https://tools.google.com/dlpage/gaoptout/
          </a>
        </p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── Privacy Policy (English) ── */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Privacy Policy (English)
        </h1>
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          Below we explain how personal data is processed on this website.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Hosting via Vercel
        </h2>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          Our website is hosted on Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA).
          Data may be transferred to servers in the United States.
          Vercel is certified under the EU–U.S. Data Privacy Framework.
        </p>

        <hr className="border-[var(--border)] mb-10" />

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Google Analytics 4
        </h2>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Our website uses Google Analytics, a web analytics service provided by Google Ireland Limited
          (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland. Google Analytics enables us to analyze
          user behavior and improve our services accordingly.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Google Analytics 4 uses cookies or similar technologies to collect information about your use of the
          website and transmit it to Google. IP addresses are anonymized by default in Google Analytics, so
          your full IP address is not stored.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Processing is carried out exclusively on the basis of your consent pursuant to Art. 6 (1) (a) GDPR.
          You may withdraw your consent at any time via the cookie banner.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          It cannot be ruled out that data may be transferred to and processed in the United States.
          Google LLC is certified under the EU-U.S. Data Privacy Framework, ensuring an adequate level of data protection.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          We have concluded a data processing agreement with Google pursuant to Art. 28 GDPR.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Data processed by Google is deleted or anonymized after 2 months by default, unless statutory
          retention obligations apply.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          You can prevent the collection of your data by Google Analytics by adjusting your cookie settings and
          withdrawing your consent for statistics cookies. Additionally, you can install the following browser plugin:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline break-all"
          >
            https://tools.google.com/dlpage/gaoptout/
          </a>
        </p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── License / Copyright ── */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          License / Copyright
        </h1>
        <p className="text-[var(--muted)] leading-relaxed mb-2">
          © 2026 <strong className="text-white">namastack.io</strong>.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-10">
          Namastack Outbox for Spring Boot is licensed under the{' '}
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Apache License 2.0
          </a>.
        </p>

        <hr className="border-[var(--border)] mb-10" />

        {/* ── Trademarks ── */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Trademarks
        </h1>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Spring®, Spring Boot®, and the Spring leaf logo are trademarks of Broadcom Inc. and/or its subsidiaries.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Java™ and OpenJDK™ are trademarks of Oracle and/or its affiliates.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          PostgreSQL®, MySQL®, and other database names are trademarks of their respective owners.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          AWS™ and Amazon Web Services™ are trademarks of Amazon.com, Inc. or its affiliates.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Apache®, Apache Kafka®, Apache Tomcat®, and Apache Cassandra™ are trademarks of the Apache Software Foundation.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          All other trademarks are the property of their respective owners.
        </p>
        <p className="text-[var(--muted)] leading-relaxed">
          This project is an independent open-source project and is not affiliated with, endorsed by, or
          sponsored by Broadcom Inc. or the Spring team.
        </p>

      </div>
    </main>
  )
}
