import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { References } from '@/components/sections/References';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <References />
      <ServiceArea />
      <Faq />
      <Contact />
    </main>
  );
}
