import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-[#000000] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#000000] tracking-tight">Privacy Policy</h1>
        <div className="prose prose-lg text-[#6B6B6B] prose-a:text-[#E87722] hover:prose-a:text-[#000000]">
          <p className="lead">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p className="mt-8">
            SOLKN ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our IT, development, and AI automation services.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We may collect information about you in various ways, including:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Information you voluntarily provide when contacting us, requesting a quote, or subscribing to our newsletters (e.g., name, email address, phone number, company name).</li>
            <li><strong>Service Data:</strong> Information required to provide our IT and development services, which may include network configurations, system logs, or access credentials. We handle this data with strict confidentiality under non-disclosure agreements.</li>
            <li><strong>Usage Data:</strong> Information automatically collected when you access our website (e.g., IP address, browser type, pages viewed, time spent on site) using cookies and similar tracking technologies.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our services.</li>
            <li>Respond to your inquiries and fulfill your requests.</li>
            <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
            <li>Deliver targeted marketing, promotional offers, and newsletters (you may opt out at any time).</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Monitor and analyze usage and trends to enhance our services.</li>
            <li>Protect our systems, prevent fraud, and ensure security.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">3. Disclosure of Your Information</h2>
          <p>
            We may share your information in certain situations:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">4. Data Security</h2>
          <p>
            We implement reasonable and industry-standard technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">5. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Object to or restrict our processing of your personal data.</li>
            <li>Request data portability.</li>
            <li>Withdraw consent at any time, where we rely on your consent to process your personal information.</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">6. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites and applications of interest. Once you have used these links to leave our site, any information you provide to these third parties is not covered by this Privacy Policy.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
          </p>

          <h2 className="text-2xl font-medium text-[#000000] mt-12 mb-4">8. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
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
