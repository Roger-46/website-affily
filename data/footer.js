import { Facebook, Twitter, LinkedIn, Instagram } from '@/components/icons'

export const FooterData = {
  footerText: 'The all-in-one affiliate marketing platform for Shopify. Grow your revenue with powerful referral programs, real-time tracking, and automated commission payouts.',
  copyright: `${new Date().getFullYear()} Affily. All Rights Reserved`,
  email: 'support@affily.io',
  phone: '+1 (888) 456-7890',
  explore: [
    { id: 1, name: 'Features', link: '/features' },
    { id: 2, name: 'Pricing', link: '/pricing' },
    { id: 3, name: 'Case Studies', link: '/case-studies' },
    { id: 4, name: 'About Us', link: '/about' },
    { id: 5, name: 'Book a Demo', link: '/demo' },
  ],
  resources: [
    { id: 1, name: 'Getting Started', link: '/blog' },
    { id: 2, name: 'Blog', link: '/blog' },
    { id: 3, name: 'Help Center', link: '#', external: false },
    { id: 4, name: 'API Documentation', link: '#', external: false },
  ],
  socialLinks: [
    { id: 1, name: <Facebook />, link: '#', label: 'Facebook' },
    { id: 2, name: <Twitter />, link: '#', label: 'Twitter' },
    { id: 3, name: <LinkedIn />, link: '#', label: 'LinkedIn' },
    { id: 4, name: <Instagram />, link: '#', label: 'Instagram' },
  ],
}
