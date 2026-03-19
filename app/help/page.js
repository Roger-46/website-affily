import AffilyNavbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import HelpCenter from '@/components/help/HelpCenter'
import { helpFaqs } from '@/data/help'

export const metadata = {
  title: 'Help Center - Affily',
  description: 'Get help with Affily. Find guides, tutorials, and answers to common questions about affiliate program management on Shopify.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: helpFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AffilyNavbar />
      <main>
        <HelpCenter />
      </main>
      <Footer />
    </>
  )
}
