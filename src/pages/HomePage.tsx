import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TargetAudience } from '../components/TargetAudience';
import { Features } from '../components/Features';
import { SocialProof } from '../components/SocialProof';

/**
 * AIDA page structure:
 * 1. Hero — Attention: cinematic hero, stats bar
 * 2. Brands — immediate trust signal (tech partners), moved up from position 5
 * 3. Services — Interest: what we offer and how
 * 4. WhyChooseUs — Desire: why SOLKN specifically
 * 5. TargetAudience — validates fit: who we serve
 * 6. Features — AI & web capabilities showcase
 * 7. SocialProof — testimonials, portfolio, FAQ, and CTA: Action
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <WhyChooseUs />
      <TargetAudience />
      <Features />
      <SocialProof />
    </>
  );
}
