import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ShowroomSection } from '@/components/sections/ShowroomSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { DetailsSection } from '@/components/sections/DetailsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ShowroomSection />
      <BeforeAfterSection />
      <DetailsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
