import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Web3 Icons',
  description: 'Privacy policy for Web3 Icons and the Web3 Icons Chrome extension.',
}

export default function PrivacyPage() {
  return (
    <div className="prose prose-invert mx-auto max-w-2xl px-4 py-16">
      <h1>Privacy Policy</h1>
      <p className="text-neutral-400">Last updated: February 2, 2026</p>

      <h2>Overview</h2>
      <p>
        Web3 Icons is an open-source icon library for cryptocurrency tokens,
        networks, wallets, and exchanges. This policy covers the Web3 Icons
        website (web3icons.io) and the Web3 Icons Chrome extension.
      </p>

      <h2>Data We Collect</h2>
      <p>
        <strong>We do not collect any personal data.</strong> The Chrome
        extension runs entirely on your device. It does not track you, send
        analytics, or communicate with any server.
      </p>
      <p>
        The website uses Vercel Analytics for anonymous, aggregated page view
        statistics. No cookies are used for tracking. No personal information is
        collected or stored.
      </p>

      <h2>Permissions</h2>
      <p>
        The Chrome extension requests the <code>clipboardWrite</code> permission
        solely to copy SVG icon code to your clipboard when you click the copy
        button. No clipboard data is read or transmitted.
      </p>

      <h2>Third Parties</h2>
      <p>
        We do not share any data with third parties because we do not collect
        any.
      </p>

      <h2>Open Source</h2>
      <p>
        The full source code is available at{' '}
        <a
          href="https://github.com/0xa3k5/web3icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/0xa3k5/web3icons
        </a>
        . You can verify everything described in this policy by reviewing the
        code.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach out at{' '}
        <a href="mailto:hey@akml.io">hey@akml.io</a>.
      </p>
    </div>
  )
}
