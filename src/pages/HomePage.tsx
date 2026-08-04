import { Hero } from '../components/Hero';
import { TargetAudience } from '../components/TargetAudience';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Brands } from '../components/Brands';
import { Features } from '../components/Features';
import { SocialProof } from '../components/SocialProof';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TargetAudience />
      <Brands />
      <Features />
      <SocialProof />
    </>
  );
}
