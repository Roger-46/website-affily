'use client'
import Link from 'next/link'
import { FadeUpAnimation } from '@/components/animations'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start bg-zinc-50 pt-[200px] max-lg:pt-[150px]" id="scene">
      <div className="container relative z-10 mb-10">
        <FadeUpAnimation className="relative z-10">
          <div className="mx-auto max-w-[800px] text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex">
              <span
                className="inline-flex items-center gap-3 rounded-3xl bg-white/95 px-2 py-1.5 shadow-sm"
                style={{ boxShadow: 'rgba(42, 48, 61, 0.08) 0px 0px 0px 1px' }}
              >
                <div
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary/15"
                  style={{ boxShadow: 'rgba(42, 48, 61, 0.08) 0px 1px 1px -0.5px, rgba(255, 255, 255, 0.64) 0px 0.75px 0.75px 0px inset' }}
                >
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm font-semibold text-gray-700">Built for Shopify</span>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.477 1.862C6.575 1.663 6.778 1.537 7 1.537C7.222 1.537 7.425 1.663 7.523 1.862L8.836 4.522C8.921 4.694 9.085 4.813 9.275 4.841L12.21 5.267C12.689 5.337 12.88 5.925 12.534 6.262L10.41 8.332C10.272 8.466 10.209 8.66 10.242 8.849L10.743 11.773C10.78 11.992 10.69 12.213 10.511 12.343C10.331 12.473 10.093 12.49 9.897 12.387L7.271 11.007C7.101 10.918 6.899 10.918 6.729 11.007L4.103 12.387C3.907 12.49 3.669 12.473 3.489 12.343C3.31 12.213 3.22 11.992 3.257 11.773L3.758 8.849C3.79 8.66 3.728 8.467 3.59 8.333L1.466 6.263C1.306 6.108 1.248 5.876 1.317 5.664C1.386 5.452 1.57 5.298 1.79 5.267L4.725 4.841C4.915 4.814 5.08 4.694 5.165 4.521L6.477 1.861Z" fill="rgb(18,25,40)" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">4.9</span>
                  <span className="text-sm text-gray-500">(328)</span>
                </div>
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgb(243, 244, 247)', boxShadow: 'rgb(231, 233, 239) 0px 0px 0px 1px' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </span>
            </div>

            <h1 className="mb-8 text-slate-900 max-md:mb-6">
              Affiliate Marketing for Your{' '}
              <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-borderColour-light">
                Shopify
              </span>{' '}
              Store
            </h1>
            <p className="mx-auto mb-12 max-w-[620px] text-lg text-slate-700 max-md:mb-8">
              Launch powerful affiliate & referral programs, track performance in real-time,
              and automate commission payouts. Grow your revenue with brand ambassadors.
            </p>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="btn">
                Install Free on Shopify
              </Link>
              <Link href="/demo" className="btn-outline">
                Book A Demo
              </Link>
            </div>
            <p className="text-sm text-paragraph-light">
              100% Free &bull; No credit card required &bull; 5-minute setup
            </p>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default Hero
