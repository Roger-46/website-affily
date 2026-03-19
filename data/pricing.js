export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Full-featured affiliate marketing — completely free during early access.',
    priceMonthly: 0,
    priceYearly: 0,
    cta: 'Install Free on Shopify',
    ctaLink: '#',
    featured: true,
    badge: 'Early Access',
    badgeVariant: 'featured',
    featureCategories: [
      {
        name: 'Programs & Affiliates',
        features: [
          { text: 'Unlimited affiliate programs', icon: 'Layers', bold: true },
          { text: 'Unlimited affiliates', icon: 'Users', bold: true },
          { text: 'Branded affiliate portal', icon: 'LayoutDashboard' },
          { text: 'Affiliate invite links (48h expiry)', icon: 'Link2' },
          { text: 'Self-registration page', icon: 'Users' },
        ],
      },
      {
        name: 'Commission Structures',
        features: [
          { text: 'Percentage commissions', icon: 'Settings' },
          { text: 'Flat rate commissions', icon: 'Settings' },
          { text: 'Tiered commissions (unlimited tiers)', icon: 'Layers' },
          { text: 'Per-product commission overrides', icon: 'Settings' },
        ],
      },
      {
        name: 'Tracking & Analytics',
        features: [
          { text: 'Dual tracking (Web Pixel + cart attributes)', icon: 'BarChart3', bold: true },
          { text: 'Real-time click & conversion tracking', icon: 'BarChart3' },
          { text: 'Order cancellation/refund auto-sync', icon: 'Check' },
          { text: 'Customer email fallback matching', icon: 'Mail' },
        ],
      },
      {
        name: 'Payouts',
        features: [
          { text: 'PayPal payouts', icon: 'CreditCard' },
          { text: 'Bank transfer (including SWIFT)', icon: 'CreditCard' },
          { text: 'Bulk payout processing', icon: 'CreditCard' },
          { text: 'Transaction ID & notes tracking', icon: 'Check' },
        ],
      },
      {
        name: 'Affiliate Portal',
        features: [
          { text: 'Self-service dashboard', icon: 'LayoutDashboard' },
          { text: 'Conversion & earnings history', icon: 'BarChart3' },
          { text: 'Payout history', icon: 'Clock' },
          { text: 'Profile & payment settings', icon: 'Settings' },
          { text: 'Password management', icon: 'Check' },
        ],
      },
    ],
  },
]

export const comparisonFeatures = [
  {
    category: 'Programs & Affiliates',
    features: [
      { name: 'Affiliate programs', affily: 'Unlimited (Free)', uppromote: '1 (Free) / Unlimited ($29.99+)', goaffpro: 'Unlimited (Free)', refersion: 'Unlimited ($39+)' },
      { name: 'Active affiliates', affily: 'Unlimited (Free)', uppromote: 'Unlimited', goaffpro: 'Unlimited', refersion: 'Unlimited ($39+)' },
      { name: 'Revenue/performance fees', affily: '0%', uppromote: '1-2%', goaffpro: '0%', refersion: '0%' },
    ],
  },
  {
    category: 'Commission Structures',
    features: [
      { name: 'Percentage commissions', affily: true, uppromote: true, goaffpro: true, refersion: true },
      { name: 'Flat rate commissions', affily: true, uppromote: true, goaffpro: true, refersion: true },
      { name: 'Tiered commissions', affily: true, uppromote: '$89.99+', goaffpro: '$49+', refersion: 'Custom' },
      { name: 'Per-product overrides', affily: true, uppromote: '$89.99+', goaffpro: '$49+', refersion: 'Custom' },
    ],
  },
  {
    category: 'Tracking',
    features: [
      { name: 'Referral link tracking', affily: true, uppromote: true, goaffpro: true, refersion: true },
      { name: 'Dual tracking system', affily: true, uppromote: false, goaffpro: false, refersion: false },
      { name: 'Order cancel/refund sync', affily: true, uppromote: true, goaffpro: true, refersion: true },
    ],
  },
  {
    category: 'Payouts',
    features: [
      { name: 'PayPal payouts', affily: true, uppromote: true, goaffpro: true, refersion: true },
      { name: 'Bank transfer', affily: true, uppromote: '$89.99+', goaffpro: '$49+', refersion: 'Custom' },
      { name: 'Bulk payout processing', affily: true, uppromote: '$89.99+', goaffpro: '$49+', refersion: true },
    ],
  },
  {
    category: 'Pricing',
    features: [
      { name: 'Free plan', affily: 'All features', uppromote: 'Limited', goaffpro: 'Limited', refersion: '14-day trial only' },
      { name: 'Starting paid price', affily: '$0 (Free)', uppromote: '$29.99/mo', goaffpro: '$49/mo', refersion: '$39/mo' },
    ],
  },
]

export const pricingStats = [
  { number: 0, suffix: '', label: 'Cost — Forever Free', displayValue: '$0' },
  { number: 0, suffix: '%', label: 'Revenue Fees', displayValue: '0' },
  { number: 99.9, suffix: '%', label: 'Uptime Guarantee' },
]

export const whyChooseUsFeatures = [
  {
    id: 1,
    title: '100% Free — All Features Included',
    description: 'No paid tiers, no feature gates, no credit card required. Every feature is available on the free plan during early access.',
  },
  {
    id: 2,
    title: 'Zero Revenue Fees — Ever',
    description: 'Unlike UpPromote (1-2%) and ReferralCandy (up to 10.5%), Affily charges zero performance fees. Keep 100% of your affiliate-driven revenue.',
  },
  {
    id: 3,
    title: 'Dual Tracking System',
    description: 'Our Web Pixel + cart attribute dual tracking ensures no referral is missed. Most competitors rely on a single tracking method.',
  },
  {
    id: 4,
    title: 'Built for Shopify, Not Bolted On',
    description: 'Native Shopify integration with Web Pixels, webhooks, and admin embedding. Not a generic platform with a Shopify plugin.',
  },
]

export const pricingFaqs = [
  {
    id: 1,
    question: 'Is Affily really free?',
    answer: 'Yes! Affily is completely free during our early access period. All features are included — unlimited programs, unlimited affiliates, tiered commissions, dual tracking, bulk payouts, and more. No credit card required, no hidden fees.',
  },
  {
    id: 2,
    question: 'Will Affily always be free?',
    answer: 'We are currently in early access and all features are free. In the future, we may introduce paid plans with premium features, but early access users will be rewarded with special pricing and grandfathered benefits. We will always have a generous free tier.',
  },
  {
    id: 3,
    question: 'Are there any hidden fees or revenue commissions?',
    answer: 'No. Affily has zero performance fees, zero revenue commissions, and zero hidden costs. Unlike competitors who charge 1-10% of your affiliate-driven sales, you keep 100% of your revenue.',
  },
  {
    id: 4,
    question: 'What features are included in the free plan?',
    answer: 'Everything! Unlimited affiliate programs, unlimited affiliates, all commission types (percentage, flat, tiered, per-product), dual tracking system, branded affiliate portal, PayPal and bank transfer payouts, bulk payout processing, and real-time analytics.',
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer: 'Simply install Affily from the Shopify App Store. Setup takes under 5 minutes — create your first affiliate program, configure commissions, and share your affiliate registration link. No coding required.',
  },
  {
    id: 6,
    question: 'What happens to my data if paid plans are introduced?',
    answer: 'Your affiliate data, conversion history, and payout records are never deleted. As an early access user, you will receive special pricing and your existing features will be grandfathered in.',
  },
  {
    id: 7,
    question: 'Do you support international affiliates?',
    answer: 'Yes! Affiliates can set up PayPal or bank transfer payment methods, including SWIFT codes for international transfers. The affiliate portal works globally with no geographic restrictions.',
  },
]
