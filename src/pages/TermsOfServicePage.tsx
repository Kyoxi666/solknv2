import React from 'react';
import { PageSEO } from '../components/PageSEO';

export function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900 font-sans">
      <PageSEO
        title="Terms of Service | SOLKN IT Solutions UK"
        description="Terms of Service for SOLKN, a UK-registered provider of managed IT support, web development, network infrastructure, and AI solutions."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: {currentDate} | SOLKN (UK Registered Company)</p>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you ("Client", "you", or "your") and <strong>SOLKN</strong> ("Company", "we", "us", or "our"), a company registered in the United Kingdom, operating from Harrow, London.
            </p>
            <p className="leading-relaxed mt-3">
              By accessing our website (<a href="https://solkn.com" className="text-[#2b3d5b] underline">solkn.com</a>), utilizing our Client Portal, or engaging our technical services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with all of these Terms, you are expressly prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Description of Services</h2>
            <p className="leading-relaxed">
              SOLKN provides professional business technology services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Managed IT Support and Helpdesk Services</li>
              <li>Network Infrastructure Engineering and 24/7 Monitoring</li>
              <li>Custom Web Development, Application Engineering & Secure Hosting</li>
              <li>AI Business Solutions and Workflow Automation</li>
              <li>IT Outsourcing and Strategic Consulting</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Specific project scopes, deliverables, Service Level Agreements (SLAs), and fee structures are governed by individual client contracts, Master Service Agreements (MSAs), or Statements of Work (SOWs) executed between SOLKN and the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">3. Client Responsibilities & System Access</h2>
            <p className="leading-relaxed">
              To enable SOLKN to fulfill its service obligations, Clients agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide timely access to necessary systems, infrastructure, software licenses, and administrative credentials.</li>
              <li>Ensure all administrative personnel maintain the confidentiality of Client Portal logins and passwords.</li>
              <li>Appoint a primary technical contact authorized to make decisions regarding service requests and approvals.</li>
              <li>Notify SOLKN immediately upon discovering any unauthorized access, security incident, or system breach.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Fees, Billing & Payment Terms</h2>
            <p className="leading-relaxed">
              Fees for SOLKN services are detailed in the applicable invoice, quote, or statement of work and are quoted in British Pounds Sterling (£) unless specified otherwise.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Invoices are due within 30 calendar days from the invoice date.</li>
              <li>Late payments may be subject to statutory interest under the UK Late Payment of Commercial Debts (Interest) Act 1998.</li>
              <li>SOLKN reserves the right to suspend managed services, technical support, or hosting access for accounts that remain overdue past written notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Intellectual Property & Deliverables</h2>
            <p className="leading-relaxed">
              <strong>Our Intellectual Property:</strong> SOLKN retains all right, title, and interest in and to our pre-existing software, frameworks, proprietary automation scripts, tools, and general technical knowledge used in providing services.
            </p>
            <p className="leading-relaxed mt-3">
              <strong>Client Deliverables:</strong> Upon full payment of all invoices related to custom web applications or custom code developed specifically for the Client, SOLKN assigns ownership of the bespoke deliverables to the Client, subject to any open-source or third-party software licensing terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Warranties & Limitation of Liability</h2>
            <p className="leading-relaxed">
              SOLKN warrants that services will be performed with reasonable care and skill in accordance with UK industry standards.
            </p>
            <p className="leading-relaxed mt-3">
              To the maximum extent permitted under UK law, SOLKN shall not be liable for any indirect, special, incidental, or consequential damages (including loss of revenue, profit, business interruption, or data loss) arising out of or in connection with the use of our services. Our total aggregate liability under any claim shall be limited to the total fees paid by the Client to SOLKN in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate a service agreement in accordance with the notice period specified in the applicable SOW or SLA. Either party may terminate immediately if the other party commits a material breach that is not cured within 30 days of written notice. Upon termination, the Client remains liable for all fees for services performed up to the effective date of termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Governing Law & Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms, their subject matter, and their formation are governed by and construed in accordance with the laws of England and Wales. You and SOLKN both agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions regarding these Terms of Service, please contact our legal and support team:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-gray-800 space-y-2">
              <p><strong>SOLKN</strong> (Company registered in the United Kingdom)</p>
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
