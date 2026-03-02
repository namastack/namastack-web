import CookieConsentComponent from '../components/CookieConsent';

export default function Footer() {
  return (
    <footer className="py-10 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Namastack. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <CookieConsentComponent />
          <a
            href="/outbox"
            className="hover:text-white transition-colors duration-200"
          >
            Docs
          </a>
          <a
            href="https://github.com/namastack/namastack-outbox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="/legal"
            className="hover:text-white transition-colors duration-200"
          >
            Legal Notice
          </a>
        </nav>
      </div>
    </footer>
  )
}