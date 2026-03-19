export const helpCategories = [
  {
    id: 1,
    icon: '🚀',
    title: 'Getting Started',
    description: 'Set up your first affiliate program in minutes',
    articles: [
      { id: 1, title: 'Installing Affily on your Shopify store', readTime: '2 min' },
      { id: 2, title: 'Creating your first affiliate program', readTime: '3 min' },
      { id: 3, title: 'Setting up commission structures', readTime: '4 min' },
      { id: 4, title: 'Inviting your first affiliates', readTime: '2 min' },
    ],
  },
  {
    id: 2,
    icon: '👥',
    title: 'Managing Affiliates',
    description: 'Recruit, approve, and manage your affiliate partners',
    articles: [
      { id: 5, title: 'Approving and managing affiliate applications', readTime: '3 min' },
      { id: 6, title: 'Creating affiliate invite links', readTime: '2 min' },
      { id: 7, title: 'Setting up the self-registration page', readTime: '3 min' },
      { id: 8, title: 'Assigning affiliates to programs', readTime: '2 min' },
    ],
  },
  {
    id: 3,
    icon: '💰',
    title: 'Commissions & Payouts',
    description: 'Configure commissions and process affiliate payments',
    articles: [
      { id: 9, title: 'Setting up percentage vs flat rate commissions', readTime: '3 min' },
      { id: 10, title: 'Configuring tiered commission structures', readTime: '4 min' },
      { id: 11, title: 'Per-product commission overrides', readTime: '3 min' },
      { id: 12, title: 'Processing PayPal and bank transfer payouts', readTime: '3 min' },
      { id: 13, title: 'Bulk payout processing', readTime: '2 min' },
    ],
  },
  {
    id: 4,
    icon: '📊',
    title: 'Tracking & Analytics',
    description: 'Understand how referrals are tracked and reported',
    articles: [
      { id: 14, title: 'How dual tracking works (Web Pixel + cart attributes)', readTime: '5 min' },
      { id: 15, title: 'Understanding conversion statuses', readTime: '3 min' },
      { id: 16, title: 'Order cancellation and refund sync', readTime: '2 min' },
      { id: 17, title: 'Reading your analytics dashboard', readTime: '4 min' },
    ],
  },
  {
    id: 5,
    icon: '🎨',
    title: 'Affiliate Portal',
    description: 'Help your affiliates navigate their self-service dashboard',
    articles: [
      { id: 18, title: 'Affiliate portal overview', readTime: '3 min' },
      { id: 19, title: 'Setting up payment methods (PayPal & bank)', readTime: '2 min' },
      { id: 20, title: 'Viewing conversions and earnings', readTime: '2 min' },
      { id: 21, title: 'Managing affiliate profile and password', readTime: '2 min' },
    ],
  },
  {
    id: 6,
    icon: '⚙️',
    title: 'Account & Settings',
    description: 'Configure your Affily settings and integrations',
    articles: [
      { id: 22, title: 'Managing shop settings', readTime: '2 min' },
      { id: 23, title: 'Webhook configuration', readTime: '3 min' },
      { id: 24, title: 'Troubleshooting tracking issues', readTime: '4 min' },
      { id: 25, title: 'Resetting webhooks via Dev Zone', readTime: '2 min' },
    ],
  },
]

export const helpFaqs = [
  {
    id: 1,
    question: 'How do I install Affily?',
    answer: 'Go to the Shopify App Store, search for "Affily", and click "Add app". The installation is automatic — no coding or theme changes required. Once installed, you can access Affily from your Shopify admin sidebar.',
  },
  {
    id: 2,
    question: 'How do I create my first affiliate program?',
    answer: 'After installing, go to the Programs section in your Affily dashboard. Click "Create Program", give it a name, set your commission type (percentage, flat rate, or tiered), choose which products it applies to, and activate it. The whole process takes under 2 minutes.',
  },
  {
    id: 3,
    question: 'How do affiliates sign up?',
    answer: 'Affiliates can register through your branded signup page or via invite links. To invite affiliates, go to the Affiliates section and generate an invite link. The link is valid for 48 hours. Affiliates fill in their details, choose a program, and their account starts in "pending" status for your review.',
  },
  {
    id: 4,
    question: 'How does referral tracking work?',
    answer: 'Affily uses a dual tracking system. When a customer clicks an affiliate link, we set a cookie. At checkout, our Shopify Web Pixel captures the referral data. If the pixel fails, our cart attribute method provides a backup. We also support email-based matching as a final fallback.',
  },
  {
    id: 5,
    question: 'How do I pay my affiliates?',
    answer: 'Go to the Payouts section in your dashboard. You will see a list of affiliates with pending commissions. Select the affiliates you want to pay, enter the transaction ID from your PayPal or bank transfer, and mark them as paid. Affiliates can see their payout history in their portal.',
  },
  {
    id: 6,
    question: 'What happens when an order is cancelled or refunded?',
    answer: 'Affily automatically syncs with Shopify. When an order is cancelled or refunded, the corresponding conversion is automatically marked as cancelled and the commission is removed from pending payouts.',
  },
]
