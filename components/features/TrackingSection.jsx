'use client'
import { ContentSection } from '@/components/shared'

const TrackingSection = () => {
  return (
    <ContentSection
      tagline="TRACKING & ANALYTICS"
      title="Dual Tracking System — Never Miss a Referral"
      description="Our proprietary dual tracking ensures maximum attribution accuracy. Web Pixel captures checkout events while cart attributes provide a reliable backup."
      items={[
        { text: 'Shopify Web Pixel integration for checkout tracking' },
        { text: 'Cart attribute fallback (luna_affiliate_ref)' },
        { text: 'Customer email matching as final fallback' },
        { text: 'Real-time click, conversion, and earnings tracking' },
        { text: 'Automatic order cancellation and refund sync' },
      ]}
      imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
      imageAlt="Real-time analytics dashboard"
      reversed={true}
      ctaText="See How It Works"
      ctaHref="#"
      bgColor="bg-white dark:bg-dark-300"
    />
  )
}

export default TrackingSection
