'use client'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { milestones, values, teamStats } from '@/data/about'
import { CounterAnimation } from '@/components/shared'

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray pb-[100px] pt-[200px] dark:bg-dark max-lg:pb-16 max-lg:pt-[160px]">
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
            <div className="mx-auto max-w-[700px] text-center">
              <p className="section-tagline">About Us</p>
              <h1 className="mb-6">
                We&apos;re Building the Affiliate Tool{' '}
                <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-borderColour-light">
                  Merchants
                </span>{' '}
                Actually Want
              </h1>
              <p className="mx-auto max-w-[550px] text-lg text-paragraph-light dark:text-paragraph-muted">
                Affily was born from a simple frustration: affiliate marketing tools for Shopify are either too expensive, too complicated, or both. We&apos;re fixing that.
              </p>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Team Stats */}
      <section className="relative z-10 -mt-10">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto max-w-[850px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="grid grid-cols-4 items-center rounded border border-dashed border-gray-100 bg-white py-8 dark:border-borderColour-dark dark:bg-dark-200 max-md:grid-cols-2 max-md:gap-y-8">
                {teamStats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center border-r border-dashed border-gray-100 last:border-r-0 dark:border-borderColour-dark max-md:border-r-0 max-md:[&:nth-child(odd)]:border-r"
                  >
                    <h3 className="text-[36px] font-bold max-md:text-[28px]">{stat.value}</h3>
                    <p className="text-sm text-paragraph/70 dark:text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto max-w-[700px]">
              <p className="section-tagline">Our Story</p>
              <h2 className="mb-8">Why We Built Affily</h2>
              <div className="space-y-6 text-lg leading-relaxed text-paragraph/80 dark:text-white/80">
                <p>
                  As Shopify developers, we watched merchants pay $30-$800/month for affiliate marketing tools — many of which also charged 1-10% of every affiliate sale. On top of that, most of these tools were built as generic platforms with Shopify bolted on as an afterthought.
                </p>
                <p>
                  We believed there was a better way. A tool built natively for Shopify, with a modern UI that merchants actually enjoy using, and pricing that doesn&apos;t punish you for growing.
                </p>
                <p>
                  So we built Affily. And during early access, we made it completely free — all features, unlimited affiliates, zero revenue fees. Because we believe the best way to build a great product is to get it into merchants&apos; hands and iterate based on real feedback.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray pb-150 pt-150 dark:bg-dark max-md:py-20">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[550px] text-center">
              <p className="section-tagline">Milestones</p>
              <h2>Our Journey So Far</h2>
            </div>
          </FadeUpAnimation>

          <div className="mx-auto max-w-[700px]">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 h-full w-[2px] bg-borderColour dark:bg-borderColour-dark max-md:left-[15px]"></div>

              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <FadeUpOneByOneAnimation key={milestone.id} i={index}>
                    <div className="relative flex gap-8 max-md:gap-6">
                      <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white max-md:h-8 max-md:w-8 max-md:text-xs">
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="pb-2 pt-1">
                        <span className="mb-1 text-xs font-medium text-primary">{milestone.year}</span>
                        <h3 className="mb-2 text-xl font-semibold">{milestone.title}</h3>
                        <p className="text-paragraph/70 dark:text-white/70">{milestone.description}</p>
                      </div>
                    </div>
                  </FadeUpOneByOneAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
        <div className="container">
          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[550px] text-center">
              <p className="section-tagline">Our Values</p>
              <h2>What We Stand For</h2>
            </div>
          </FadeUpAnimation>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {values.map((value, index) => (
              <FadeUpOneByOneAnimation key={value.id} i={index} className="h-full">
                <div className="h-full rounded-medium bg-gray p-8 text-center dark:bg-dark-200">
                  <div className="mb-5 text-4xl">{value.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-paragraph-light dark:text-paragraph-muted">{value.description}</p>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
