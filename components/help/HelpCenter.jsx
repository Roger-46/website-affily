'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { helpCategories, helpFaqs } from '@/data/help'
import { Search } from 'lucide-react'

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="rounded-medium border border-borderColour bg-white p-6 dark:border-borderColour-dark dark:bg-dark-200">
    <button className="flex w-full items-center justify-between text-left" onClick={onToggle}>
      <h4 className="pr-4 font-semibold">{faq.question}</h4>
      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray transition-transform dark:bg-dark-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-[500px]' : 'max-h-0'}`}>
      <p className="text-paragraph/70 dark:text-white/70">{faq.answer}</p>
    </div>
  </div>
)

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaqId, setOpenFaqId] = useState(1)

  const filteredCategories = searchQuery
    ? helpCategories.map((cat) => ({
        ...cat,
        articles: cat.articles.filter((a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.articles.length > 0)
    : helpCategories

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray pb-[80px] pt-[200px] dark:bg-dark max-lg:pb-16 max-lg:pt-[160px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #f5f8fa 70%)' }} />
        <div className="container relative z-10">
          <FadeUpAnimation>
            <div className="mx-auto max-w-[600px] text-center">
              <p className="section-tagline">Help Center</p>
              <h1 className="mb-6">How Can We Help You?</h1>
              <p className="mb-8 text-lg text-paragraph-light dark:text-paragraph-muted">
                Find guides, tutorials, and answers to get the most out of Affily.
              </p>
              <div className="relative mx-auto max-w-[500px]">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-paragraph/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-borderColour bg-white py-4 pl-12 pr-6 text-base outline-none transition-shadow focus:border-primary/30 focus:shadow-lg dark:border-borderColour-dark dark:bg-dark-200 dark:text-white"
                />
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {filteredCategories.map((category, index) => (
              <FadeUpOneByOneAnimation key={category.id} i={index}>
                <div className="h-full rounded-medium border border-borderColour bg-white p-8 transition-all hover:border-primary/20 hover:shadow-nav dark:border-borderColour-dark dark:bg-dark-200 dark:hover:border-primary/20">
                  <div className="mb-4 text-4xl">{category.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                  <p className="mb-6 text-sm text-paragraph-light dark:text-paragraph-muted">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.articles.map((article) => (
                      <li key={article.id}>
                        <Link
                          href="#"
                          className="group flex items-center justify-between text-sm text-paragraph/80 transition-colors hover:text-primary dark:text-white/80 dark:hover:text-primary"
                        >
                          <span className="group-hover:underline">{article.title}</span>
                          <span className="ml-2 flex-shrink-0 text-xs text-paragraph/40 dark:text-white/40">
                            {article.readTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers FAQ */}
      <section className="bg-gray pb-150 pt-150 dark:bg-dark max-md:py-20">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[550px] text-center">
              <p className="section-tagline">Quick Answers</p>
              <h2>Frequently Asked Questions</h2>
            </div>
          </FadeUpAnimation>
          <FadeUpAnimation>
            <div className="mx-auto max-w-[800px] space-y-4">
              {helpFaqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto max-w-[600px] text-center">
              <p className="section-tagline">Still Need Help?</p>
              <h2 className="mb-6">Contact Our Support Team</h2>
              <p className="mb-10 text-paragraph/70 dark:text-white/70">
                Can&apos;t find what you&apos;re looking for? Our support team typically responds within a few hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="mailto:support@affily.io"
                  className="btn"
                >
                  Email Support
                </Link>
              </div>
              <p className="mt-6 text-sm text-paragraph/50 dark:text-white/50">
                support@affily.io
              </p>
            </div>
          </FadeUpAnimation>
        </div>
      </section>
    </>
  )
}

export default HelpCenter
