import AffilyNavbar from '@/components/home/Navbar'
import {
  PricingCards,
  PricingStats,
  WhyChooseUs,
  PricingFaq,
} from '@/components/pricing'
import { FinalCta } from '@/components/shared'
import Footer from '@/components/footer/Footer'
import { pricingFaqs } from '@/data/pricing'

export const metadata = {
  title: 'Pricing - Affily Affiliate Marketing for Shopify',
  description:
    'Choose the right Affily plan for your Shopify store. Start free, upgrade as you grow. Zero revenue fees. All plans include a 14-day free trial.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AffilyNavbar />
      <main>
        <PricingCards />
        <PricingStats />
        <WhyChooseUs />
        <PricingFaq />
        <FinalCta
          heading="Ready to Get Started?"
          description="Install Affily for free — all features included during early access. No credit card, no revenue fees."
          primaryButton={{ text: 'Install Free on Shopify', href: '#', external: false }}
          secondaryButton={{ text: 'Book a Demo', href: '/demo', external: false }}
        />
      </main>
      <Footer />
    </>
  )
}
