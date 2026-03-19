'use client'
import { FadeUpOneByOneAnimation } from '@/components/animations'
import { CounterAnimation } from '@/components/shared'
import { stats } from '@/data/home'

const StatsCounter = () => {
  return (
    <section className="relative bg-dark-300 py-20 max-md:py-14">
      <div className="container">
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:gap-6">
          {stats.map((stat, index) => (
            <FadeUpOneByOneAnimation key={stat.id} i={index}>
              <div className="text-center">
                <h3 className="mb-2 text-[48px] font-bold leading-tight text-white max-lg:text-[36px] max-md:text-[28px]">
                  <CounterAnimation number={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-base text-white/60">{stat.label}</p>
              </div>
            </FadeUpOneByOneAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
