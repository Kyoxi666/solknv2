import React from 'react';

export function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-[#000000] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#000000] tracking-tight">Terms of Service</h1>
        <div className="prose prose-lg text-[#6B6B6B] prose-a:text-[#E87722] hover:prose-a:text-[#000000]">
          <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by SOLKN ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">2. Description of Services</h2>
          <p>
            SOLKN provides managed IT support, web development, AI automation, digital marketing, and related technical consulting services. The specific services provided to each client are detailed in separate service level agreements (SLAs) or statements of work (SOWs).
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">3. Client Responsibilities</h2>
          <p>
            To enable us to provide effective services, clients agree to:
          </p>
          <ul>
            <li>Provide necessary access to systems, networks, and personnel.</li>
            <li>Ensure that they have the legal right to grant such access.</li>
            <li>Maintain the confidentiality of their account credentials.</li>
            <li>Notify us immediately of any unauthorized use or security breaches.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">4. Payment Terms</h2>
          <p>
            Fees for our services are set forth in the applicable agreement or invoice. Unless otherwise specified, all payments are due within 30 days of the invoice date. Late payments may be subject to interest charges. We reserve the right to suspend services for overdue accounts.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">5. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, SOLKN retains all rights, title, and interest in and to our proprietary tools, software, methodologies, and pre-existing intellectual property used in delivering our services. Custom deliverables created specifically for the client become the client's property upon full payment.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, SOLKN shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to these terms or our services, even if advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">7. Termination</h2>
          <p>
            Either party may terminate the services in accordance with the terms specified in the individual SLA or SOW. Upon termination, the client is responsible for payment for all services rendered up to the termination date.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">8. Governing Law</h2>
          <p>
            These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the jurisdiction in which SOLKN is registered, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time. We will notify clients of material changes by posting the updated terms on our website or via email communication. Continued use of our services constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:hello@solkn.com">hello@solkn.com</a><br />
            Phone: 866.742.5487
          </p>
        </div>
      </div>
    </div>
  );
}
