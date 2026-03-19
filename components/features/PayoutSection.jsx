'use client'
import { ContentSection } from '@/components/shared'

const PayoutSection = () => {
  return (
    <ContentSection
      tagline="PAYOUTS"
      title="Streamlined Payout Management"
      description="Process affiliate payouts efficiently with full audit trail. View pending commissions, mark as paid in bulk, and record transaction details for your records."
      items={[
        { text: 'Pending payouts dashboard with affiliate breakdown' },
        { text: 'Bulk payout processing for multiple affiliates' },
        { text: 'Transaction ID and notes recording' },
        { text: 'Complete payout history and audit trail' },
        { text: 'PayPal email and bank transfer support' },
      ]}
      imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop"
      imageAlt="Payout management dashboard"
      reversed={true}
      ctaText="Start Free Trial"
      ctaHref="#"
      bgColor="bg-white dark:bg-dark-300"
    />
  )
}

export default PayoutSection
