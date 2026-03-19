'use client'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { whyMerchantsChooseData } from '@/data/features'

const icons = [
  <svg key="bolt" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="dollar" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>,
  <svg key="sync" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
]

const WhyMerchantsChoose = () => {
  return (
    <section className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="container">
        <FadeUpAnimation>
          <div className="mx-auto mb-12 max-w-[550px] text-center">
            <p className="section-tagline">Why Choose Affily</p>
            <h2>Why Merchants Choose Affily</h2>
          </div>
        </FadeUpAnimation>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {whyMerchantsChooseData.map((benefit, index) => (
            <FadeUpOneByOneAnimation key={benefit.id} i={index} className="h-full">
              <div className="h-full rounded-medium bg-gray p-8 text-center dark:bg-dark-200">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {icons[index]}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-paragraph-light dark:text-paragraph-muted">{benefit.description}</p>
              </div>
            </FadeUpOneByOneAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMerchantsChoose
