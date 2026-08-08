import React from 'react';
import { PageSEO } from '../components/PageSEO';

export function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900 font-sans">
      <PageSEO
        title="Privacy Policy | SOLKN IT Solutions UK"
        description="Privacy Policy for SOLKN. Learn how we collect, process, and protect your personal data under the UK GDPR and Data Protection Act 2018."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Effective Date: {currentDate} | UK GDPR Compliant</p>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
          <section>
            <p className="leading-relaxed text-lg">
              <strong>SOLKN</strong> ("we", "us", or "our") is a company registered in the United Kingdom, operating from Harrow, London. We are committed to protecting the privacy, confidentiality, and security of your personal data.
            </p>
            <p className="leading-relaxed mt-3">
              This Privacy Policy explains how SOLKN processes personal data in accordance with the United Kingdom General Data Protection Regulation (UK GDPR) and the UK Data Protection Act 2018 (DPA 2018) when you visit <a href="https://solkn.com" className="text-[#2b3d5b] underline">solkn.com</a>, use our Client Portal, or engage our IT, hosting, web development, and AI solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Personal Data We Collect</h2>
            <p className="leading-relaxed">
              We collect personal information necessary to deliver high-quality technology and managed IT services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Contact & Identity Data:</strong> Full name, business email address, phone number (<a href="tel:+447540319866" className="text-sky-600 hover:underline">+44 7540 319866</a>), company name, job title, and business address.</li>
              <li><strong>Account & Portal Data:</strong> Login credentials, portal preferences, communication records, and support ticket submissions.</li>
              <li><strong>Service & Infrastructure Data:</strong> System credentials, network configurations, server logs, and diagnostic telemetry required to perform managed IT, monitoring, and security services (handled under strict Non-Disclosure Agreements).</li>
              <li><strong>Technical & Usage Data:</strong> Internet Protocol (IP) address, browser type, device identifiers, time zone settings, and page interaction data collected via cookies and analytical tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Lawful Bases for Processing</h2>
            <p className="leading-relaxed">
              Under the UK GDPR, we process your personal data under the following lawful bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Contractual Necessity:</strong> To fulfill contracts, provide technical support, manage billing, and deliver requested IT services.</li>
              <li><strong>Legitimate Interests:</strong> To maintain network security, prevent fraud, optimize platform performance, and communicate business updates to existing business clients.</li>
              <li><strong>Legal Obligation:</strong> To comply with UK statutory regulations, accounting rules, and legal mandates.</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent (e.g. subscribing to marketing emails or SMS updates), which you can withdraw at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">3. Data Security & Storage</h2>
            <p className="leading-relaxed">
              We employ robust organizational, administrative, and technical security measures—including end-to-end encryption, multi-factor authentication, regular security audits, and strict access controls—to protect data against loss, misuse, or unauthorized access.
            </p>
            <p className="leading-relaxed mt-3">
              Your personal data is hosted in tier-3 compliant data centers located within the UK and European Economic Area (EEA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Data Sharing & Third Parties</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data to third parties. We may share information only with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Sub-Processors & Partners:</strong> Trusted infrastructure providers, cloud hosting vendors, and specialized technical partners bound by strict data protection agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by UK court order, law enforcement, or statutory regulatory bodies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Your Data Rights Under UK GDPR</h2>
            <p className="leading-relaxed">
              As a data subject in the United Kingdom, you hold the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you (Subject Access Request).</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("Right to be Forgotten") where legally applicable.</li>
              <li><strong>Right to Restrict Processing:</strong> Request temporary restriction of data processing.</li>
              <li><strong>Right to Data Portability:</strong> Obtain your data in a structured, machine-readable format.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You also have the right to lodge a complaint with the UK supervisory authority, the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ico.org.uk</a>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Contact Our Privacy Team</h2>
            <p className="leading-relaxed">
              To exercise your data rights or ask questions regarding this Privacy Policy, please reach out to us:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-gray-800 space-y-2">
              <p><strong>SOLKN Privacy Team</strong> (UK Registered Company)</p>
              <p>Location: Harrow, London, United Kingdom</p>
              <p>Phone: <a href="tel:+447540319866" className="text-sky-600 font-medium hover:underline">+44 7540 319866</a></p>
              <p>Email: <a href="mailto:info@solkn.com" className="text-sky-600 font-medium hover:underline">info@solkn.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
