import AffilyNavbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import { FinalCta } from '@/components/shared'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <AffilyNavbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <FinalCta
          heading="Ready to Grow Your Affiliate Revenue?"
          description="Join thousands of Shopify merchants who maximize their sales with Affily's powerful affiliate marketing platform."
          primaryButton={{ text: 'Install Free on Shopify', href: '#', external: false }}
          secondaryButton={{ text: 'Book a Demo', href: '/demo', external: false }}
        />
      </main>
      <Footer />
    </>
  )
}
