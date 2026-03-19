'use client'
import { ContentSection } from '@/components/shared'
import { BlurGradient } from '@/components/shared'

const sections = [
  {
    tagline: 'AFFILIATE PORTAL',
    title: 'Give Your Affiliates a Professional Portal',
    description:
      'Branded affiliate portal with real-time stats, marketing assets, and commission tracking. Affiliates love it — leading to higher engagement and more sales.',
    items: [
      { text: 'Self-service dashboard with real-time earnings' },
      { text: 'Copy-to-clipboard referral links' },
      { text: 'PayPal & bank transfer payout settings' },
      { text: 'Mobile-responsive design' },
    ],
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    imageAlt: 'Affily affiliate dashboard showing real-time performance metrics',
    reversed: false,
    ctaText: 'See All Features',
    ctaHref: '/features',
    bgColor: 'bg-white dark:bg-dark-300',
  },
  {
    tagline: 'COMMISSION MANAGEMENT',
    title: 'Flexible Commission Structures for Any Strategy',
    description:
      'Set up percentage, flat rate, tiered, or product-specific commissions. Create unlimited programs to match your business model and maximize affiliate motivation.',
    items: [
      { text: 'Tiered commissions based on order value' },
      { text: 'Per-product commission overrides' },
      { text: 'Multiple programs with different rules' },
      { text: 'Automatic commission calculation' },
    ],
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    imageAlt: 'Commission management interface showing tiered commission setup',
    reversed: true,
    ctaText: 'View Pricing Plans',
    ctaHref: '/pricing',
    bgColor: 'bg-gray dark:bg-dark',
  },
  {
    tagline: 'TRACKING & ANALYTICS',
    title: 'Data-Driven Decisions at a Glance',
    description:
      'Dual tracking system with Web Pixel + cart attributes ensures no referral is missed. See which affiliates, campaigns, and channels drive the most revenue.',
    items: [
      { text: 'Dual tracking: Web Pixel + cart attributes' },
      { text: 'Real-time click & conversion tracking' },
      { text: 'Order cancellation & refund auto-sync' },
      { text: 'Top performer rankings & export' },
    ],
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    imageAlt: 'Analytics dashboard showing affiliate performance metrics and charts',
    reversed: false,
    ctaText: 'Start Free Trial',
    ctaHref: '#',
    bgColor: 'bg-white dark:bg-dark-300',
  },
]

const ExplorePossibilities = () => {
  return (
    <div className="relative">
      <BlurGradient position="top" />
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  )
}

export default ExplorePossibilities
