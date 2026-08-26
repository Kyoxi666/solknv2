import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TargetAudience } from '../components/TargetAudience';
import { Features } from '../components/Features';
import { SocialProof } from '../components/SocialProof';
import { PageSEO } from '../components/PageSEO';

/**
 * AIDA page structure:
 * 1. Hero — Attention: cinematic hero, stats bar
 * 2. Brands — immediate trust signal (tech partners)
 * 3. Services — Interest: what we offer and how
 * 4. WhyChooseUs — Desire: why SOLKN specifically
 * 5. TargetAudience — validates fit: who we serve
 * 6. Features — AI & web capabilities showcase
 * 7. SocialProof — testimonials, portfolio, FAQ, and CTA: Action
 */
export function HomePage() {
  return (
    <>
      <PageSEO
        title="SOLKN IT Solutions | Managed IT Support, Networks & AI Automation UK"
        description="Intelligent IT services, 24/7 network monitoring, web development, and custom AI business solutions for growing businesses in London and the UK."
        canonicalUrl="https://solkn.com"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SOLKN',
          url: 'https://solkn.com',
          logo: 'https://solkn.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+44-7540-319866',
            contactType: 'customer service',
            areaServed: 'GB',
            availableLanguage: 'en',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Harrow, London',
            addressCountry: 'United Kingdom',
          },
          sameAs: [
            'https://linkedin.com',
            'https://twitter.com',
            'https://facebook.com',
          ],
        }}
      />
      <div className="bg-surface-light">
        <Hero />
        <Brands />
        <Services />
        <WhyChooseUs />
        <TargetAudience />
        <Features />
        <SocialProof />
      </div>
    </>
  );
}
