'use client'
import { ContentSection } from '@/components/shared'

const CommissionSection = () => {
  return (
    <ContentSection
      tagline="COMMISSIONS"
      title="Flexible Commission Structures That Drive Results"
      description="Set up the perfect commission model for your business. Percentage, flat rate, tiered, or product-specific — mix and match to maximize affiliate motivation."
      items={[
        { text: 'Percentage-based commissions (e.g., 10% of order total)' },
        { text: 'Flat rate commissions (e.g., $5 per sale)' },
        { text: 'Tiered commissions based on order value thresholds' },
        { text: 'Per-product commission overrides for specific SKUs' },
        { text: 'Multiple programs with different commission rules' },
      ]}
      imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop"
      imageAlt="Commission configuration dashboard"
      reversed={false}
      ctaText="Start Free Trial"
      ctaHref="#"
      bgColor="bg-gray dark:bg-dark"
    />
  )
}

export default CommissionSection
