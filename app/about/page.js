import AffilyNavbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import AboutPage from '@/components/about/AboutPage'
import { FinalCta } from '@/components/shared'

export const metadata = {
  title: 'About Us - Affily',
  description: 'Meet the team behind Affily. We\'re building the most merchant-friendly affiliate marketing platform for Shopify — and it\'s completely free.',
}

export default function About() {
  return (
    <>
      <AffilyNavbar />
      <main>
        <AboutPage />
        <FinalCta
          heading="Join Us on This Journey"
          description="We're building Affily for merchants like you. Install free today and help shape the future of affiliate marketing on Shopify."
          primaryButton={{ text: 'Install Free on Shopify', href: '#', external: false }}
        />
      </main>
      <Footer />
    </>
  )
}
