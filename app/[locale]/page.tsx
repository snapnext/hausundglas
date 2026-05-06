import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { References } from '@/components/sections/References';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
