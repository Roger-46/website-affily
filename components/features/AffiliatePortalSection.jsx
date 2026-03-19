'use client'
import { ContentSection } from '@/components/shared'

const AffiliatePortalSection = () => {
  return (
    <ContentSection
      tagline="AFFILIATE PORTAL"
      title="A Self-Service Portal Your Affiliates Will Love"
      description="Give affiliates full control over their account. They can view earnings, track conversions, manage payment settings, and copy their referral link — all from a branded dashboard."
      items={[
        { text: 'Real-time performance dashboard (clicks, conversions, earnings)' },
        { text: 'One-click referral link copy' },
        { text: 'PayPal and bank transfer payment setup' },
        { text: 'Conversion history with order details and status' },
        { text: 'Complete payout history with transaction records' },
        { text: 'Profile and password management' },
      ]}
      imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      imageAlt="Affiliate self-service portal"
      reversed={false}
      ctaText="View Demo Portal"
      ctaHref="/demo"
      bgColor="bg-gray dark:bg-dark"
    />
  )
}

export default AffiliatePortalSection
