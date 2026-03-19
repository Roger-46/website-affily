import { pricingStats } from '@/data/pricing'
import { FadeUpAnimation } from '@/components/animations'
import { CounterAnimation } from '@/components/shared'

const PricingStats = () => {
  return (
    <section className="relative z-10 -mt-20">
      <div className="container">
        <FadeUpAnimation>
          <div className="mx-auto max-w-[850px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
            <div className="grid grid-cols-3 items-center rounded border border-dashed border-gray-100 bg-white py-10 dark:border-borderColour-dark dark:bg-dark-200 max-md:grid-cols-1 max-md:gap-y-10">
              {pricingStats.map((stat, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center border-r border-dashed border-gray-100 last:border-r-0 dark:border-borderColour-dark max-md:border-b max-md:border-r-0 max-md:pb-6 max-md:last:border-b-0 max-md:last:pb-0">
                  <h2 className="text-[48px] font-bold max-md:text-[36px]">
                    {stat.displayValue !== undefined ? (
                      <span>{stat.displayValue}{stat.suffix}</span>
                    ) : (
                      <CounterAnimation number={stat.number} suffix={stat.suffix} />
                    )}
                  </h2>
                  <p className="text-paragraph/70 dark:text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PricingStats
