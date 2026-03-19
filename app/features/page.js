import AffilyNavbar from '@/components/home/Navbar'
import {
  FeaturesHero,
  CoreFeatures,
  CommissionSection,
  TrackingSection,
  AffiliatePortalSection,
  PayoutSection,
  WhyMerchantsChoose,
  FeaturesFaq,
} from '@/components/features'
import { FinalCta } from '@/components/shared'
import Footer from '@/components/footer/Footer'
import { featuresFaqs } from '@/data/features'

export const metadata = {
  title: 'Features - Affily Affiliate Marketing for Shopify',
  description:
    'Explore Affily features: affiliate recruitment, flexible commissions, dual tracking, self-service portal, automated payouts, and real-time analytics.',
}

export default function FeaturesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: featuresFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AffilyNavbar />
      <main>
        <FeaturesHero />
        <CoreFeatures />
        <CommissionSection />
        <TrackingSection />
        <AffiliatePortalSection />
        <PayoutSection />
        <WhyMerchantsChoose />
        <FeaturesFaq />
        <FinalCta
          heading="Start Growing Your Revenue Today"
          description="Join 5,000+ Shopify merchants using Affily to power their affiliate programs. Free plan available, no credit card required."
          primaryButton={{ text: 'Install Free on Shopify', href: '#', external: false }}
        />
      </main>
      <Footer />
    </>
  )
}
