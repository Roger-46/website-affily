'use client'
import { FadeUpAnimation } from '@/components/animations'
import { whyChooseUsFeatures } from '@/data/pricing'

const WhyChooseUs = () => {
  return (
    <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="container">
        <div className="relative grid grid-cols-2 items-center gap-25 max-md:grid-cols-1 max-md:gap-10 1xl:gap-x-24">
          <FadeUpAnimation className="relative max-md:order-2">
            <div className="w-full overflow-hidden rounded-medium bg-gray p-8 dark:bg-dark-200">
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="rounded-medium bg-white p-6 shadow-nav dark:bg-dark-300">
                  <p className="mb-1 text-sm text-paragraph/60 dark:text-white/60">Your Cost</p>
                  <p className="text-3xl font-bold text-primary">$0</p>
                  <p className="text-xs text-paragraph/50 dark:text-white/50">Free during early access</p>
                </div>
                <div className="rounded-medium bg-white p-6 shadow-nav dark:bg-dark-300">
                  <p className="mb-1 text-sm text-paragraph/60 dark:text-white/60">Revenue Fees</p>
                  <p className="text-3xl font-bold text-primary">0%</p>
                  <p className="text-xs text-paragraph/50 dark:text-white/50">Others charge 1-10.5% of affiliate sales</p>
                </div>
                <div className="rounded-medium bg-white p-6 shadow-nav dark:bg-dark-300">
                  <p className="mb-1 text-sm text-paragraph/60 dark:text-white/60">Setup Time</p>
                  <p className="text-3xl font-bold text-primary">&lt;5 min</p>
                  <p className="text-xs text-paragraph/50 dark:text-white/50">One-click Shopify install</p>
                </div>
                <div className="rounded-medium bg-white p-6 shadow-nav dark:bg-dark-300">
                  <p className="mb-1 text-sm text-paragraph/60 dark:text-white/60">Affiliate Limits</p>
                  <p className="text-3xl font-bold text-primary">Unlimited</p>
                  <p className="text-xs text-paragraph/50 dark:text-white/50">No limits on any feature</p>
                </div>
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation className="relative max-md:order-1">
            <p className="section-tagline">WHY CHOOSE AFFILY</p>
            <h2 className="mb-8">
              Better value than
              <br />
              every competitor
            </h2>
            <p className="mb-11 text-paragraph/80 dark:text-white/80">
              Affily is built specifically for Shopify merchants who want powerful affiliate marketing without the premium price tag or hidden fees.
            </p>

            <ul className="space-y-6">
              {whyChooseUsFeatures.map((feature) => (
                <li key={feature.id} className="flex items-start gap-4">
                  <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 dark:bg-dark-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">{feature.title}</h4>
                    <p className="text-paragraph/70 dark:text-white/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUpAnimation>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
