import '@/styles/theme.css'
import { cn } from '@/utils/cn'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { JsDetector } from '@/components/shared'

const inter = Inter({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: {
    default: 'Affily - Affiliate Marketing Platform for Shopify',
    template: '%s | Affily',
  },
  description:
    'Grow your Shopify revenue with Affily. Launch powerful affiliate & referral programs, track performance in real-time, and automate commission payouts.',
  openGraph: {
    title: 'Affily - Affiliate Marketing Platform for Shopify',
    description:
      'Grow your Shopify revenue with Affily. Launch powerful affiliate & referral programs, track performance in real-time, and automate commission payouts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affily - Affiliate Marketing Platform for Shopify',
    description:
      'Grow your Shopify revenue with Affily. Launch powerful affiliate & referral programs, track performance in real-time, and automate commission payouts.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className={cn(
            'relative overflow-x-hidden bg-white text-base antialiased',
            inter.variable,
            jakarta_sans.variable,
            playfair.variable,
          )}>
          <JsDetector />
          {children}
        </div>
      </body>
    </html>
  )
}
