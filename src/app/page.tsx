import Hero from '@/components/home/Hero';
import TransformationsPreview from '@/components/home/TransformationsPreview';
import WhyItWorks from '@/components/home/WhyItWorks';
import PremiumTierPreview from '@/components/home/PremiumTierPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationsPreview />
      <WhyItWorks />
      <PremiumTierPreview />
      <FinalCTA />
    </>
  );
}
