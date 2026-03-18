'use client'
import { FadeUpOneByOneAnimation } from '@/components/animations'
import { howItWorks } from '@/data/home'

const stepIcons = ['📥', '⚙️', '🤝', '🚀']

const HowItWorks = () => {
  return (
    <section className="relative bg-gray pb-150 pt-150 dark:bg-dark max-md:py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">How It Works</p>
          <h2>Get Started in 4 Simple Steps</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-[60px] hidden h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"></div>
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {howItWorks.map((step, i) => (
              <FadeUpOneByOneAnimation key={step.id} i={i} className="text-center">
                <div className="relative mb-6 inline-flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-nav dark:bg-dark-200">
                    {stepIcons[i]}
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-paragraph-light dark:text-paragraph-muted">{step.description}</p>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
