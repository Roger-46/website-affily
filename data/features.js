export const featuresFaqs = [
  {
    id: 1,
    question: 'How does Affily track affiliate referrals?',
    answer:
      'Affily uses a dual tracking system — Shopify Web Pixels and cart attribute tracking. When a customer clicks an affiliate link, a cookie is set. At checkout, our Web Pixel captures the referral data. If the pixel fails, our cart attribute method provides a reliable backup. We also support email-based matching as a final fallback, ensuring no referral is ever missed.',
  },
  {
    id: 2,
    question: 'Can I set different commission rates for different products?',
    answer:
      'Yes! Affily supports per-product commission overrides. You can set a default commission for your program, then override it for specific products. For example, set 10% for most products but 15% for new arrivals or high-margin items. You can also use tiered commissions based on order value.',
  },
  {
    id: 3,
    question: 'How do affiliates get paid?',
    answer:
      'Affiliates can configure their preferred payment method in their portal — either PayPal (by email) or bank transfer (with full banking details including SWIFT for international). When you process payouts, you can mark individual or bulk affiliates as paid, record transaction IDs, and add notes. Affiliates see their complete payout history in their dashboard.',
  },
  {
    id: 4,
    question: 'What happens if an order is cancelled or refunded?',
    answer:
      'Affily automatically syncs with Shopify order status. When an order is cancelled or refunded, the corresponding conversion is automatically marked as cancelled, and the commission is removed from pending payouts. This ensures you never overpay affiliates for invalid orders.',
  },
  {
    id: 5,
    question: 'Can I run multiple affiliate programs simultaneously?',
    answer:
      'Absolutely! You can create unlimited affiliate programs, each with different commission structures, product scopes, and descriptions. Assign affiliates to specific programs, and set a default program for new signups. This is perfect for running separate programs for influencers, customers, and content creators.',
  },
  {
    id: 6,
    question: 'How do affiliates sign up for my program?',
    answer:
      'Affiliates can register through your branded signup page or via invite links. You can generate time-limited invite tokens (48-hour expiry) and share them directly. Affiliates choose their program during registration and start in a "pending" status that you can review and approve before they begin promoting.',
  },
  {
    id: 7,
    question: 'Is there a limit on the number of affiliates I can have?',
    answer:
      'No! All Affily plans include unlimited affiliates. Whether you have 5 affiliates or 5,000, there are no per-affiliate fees or hidden charges. Our pricing is based on features, not volume, so you can scale your program without worrying about costs.',
  },
  {
    id: 8,
    question: 'Does Affily work with my existing Shopify theme?',
    answer:
      'Yes, Affily integrates seamlessly with any Shopify theme. Our tracking is handled via Shopify Web Pixels and cart attributes — no theme modifications required. The affiliate portal is a separate, branded page that works independently of your storefront design.',
  },
]

export const coreFeaturesData = [
  {
    id: 1,
    icon: '🚀',
    title: 'One-Click Setup',
    description: 'Install Affily and create your first affiliate program in under 5 minutes. No coding or theme changes required.',
  },
  {
    id: 2,
    icon: '🔗',
    title: 'Unique Referral Links',
    description: 'Each affiliate gets a unique referral code and link. Customers are tracked automatically when they click through.',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Real-Time Dashboard',
    description: 'Both merchants and affiliates see live stats — clicks, conversions, earnings, and conversion rates updated instantly.',
  },
  {
    id: 4,
    icon: '💳',
    title: 'Flexible Payouts',
    description: 'Process payouts via PayPal or bank transfer. Bulk mark as paid, record transaction IDs, and maintain a complete audit trail.',
  },
  {
    id: 5,
    icon: '🛡️',
    title: 'Order Sync & Protection',
    description: 'Automatic order status sync. Cancelled and refunded orders instantly update conversion status — no manual intervention needed.',
  },
  {
    id: 6,
    icon: '👥',
    title: 'Self-Service Portal',
    description: 'Affiliates manage their own profiles, payment methods, and passwords. View conversions, earnings, and payout history independently.',
  },
]

export const whyMerchantsChooseData = [
  {
    id: 1,
    title: '5-Minute Setup',
    description: 'Install, configure your first program, and start recruiting affiliates — all in under 5 minutes.',
  },
  {
    id: 2,
    title: 'Zero Revenue Fees',
    description: 'Unlike competitors who charge 1-10% of affiliate sales, Affily has zero performance fees on any plan.',
  },
  {
    id: 3,
    title: 'Shopify-Native Integration',
    description: 'Built specifically for Shopify with Web Pixel tracking, webhook sync, and native admin embedding.',
  },
]
