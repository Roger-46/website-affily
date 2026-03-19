import AffilyNavbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import SocialProofBar from '@/components/home/SocialProofBar'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import ExplorePossibilities from '@/components/home/ExplorePossibilities'
import HowItWorks from '@/components/home/HowItWorks'
import StatsCounter from '@/components/home/StatsCounter'
import Testimonials from '@/components/home/Testimonials'
import IntegrationLogos from '@/components/home/IntegrationLogos'
import { FinalCta } from '@/components/shared'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <AffilyNavbar />
      <main>
        <Hero />
        <SocialProofBar />
        <FeaturesGrid />
        <ExplorePossibilities />
        <HowItWorks />
        <StatsCounter />
        <Testimonials />
        <IntegrationLogos />
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
