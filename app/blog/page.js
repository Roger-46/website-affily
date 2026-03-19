import AffilyNavbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import BlogPage from '@/components/blog/BlogPage'

export const metadata = {
  title: 'Blog - Affily',
  description: 'Learn affiliate marketing strategies, tips, and best practices for Shopify merchants. Grow your revenue with expert insights from the Affily team.',
}

export default function Blog() {
  return (
    <>
      <AffilyNavbar />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </>
  )
}
