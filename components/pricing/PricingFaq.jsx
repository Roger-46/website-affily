'use client'
import { useState } from 'react'
import { pricingFaqs } from '@/data/pricing'
import { FadeUpAnimation } from '@/components/animations'

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="rounded-medium border border-borderColour bg-white p-6 dark:border-borderColour-dark dark:bg-dark-200">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onToggle}>
        <h4 className="pr-4 font-semibold">{faq.question}</h4>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray transition-transform dark:bg-dark-300 ${
            isOpen ? 'rotate-180' : ''
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'mt-4 max-h-96' : 'max-h-0'
        }`}>
        <p className="text-paragraph/70 dark:text-white/70">{faq.answer}</p>
      </div>
    </div>
  )
}

const PricingFaq = () => {
  const [openId, setOpenId] = useState(1)

  return (
    <section className="bg-gray pb-150 pt-150 dark:bg-dark max-md:py-20">
      <div className="container">
        <FadeUpAnimation>
          <div className="mx-auto mb-12 max-w-[550px] text-center">
            <p className="section-tagline">FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>
        </FadeUpAnimation>

        <FadeUpAnimation>
          <div className="mx-auto max-w-[800px] space-y-4">
            {pricingFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PricingFaq
