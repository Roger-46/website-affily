'use client'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { coreFeaturesData } from '@/data/features'

const CoreFeatures = () => {
  return (
    <section className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20" id="core-features">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1">
          <FadeUpAnimation>
            <div>
              <p className="section-tagline">Core Capabilities</p>
              <h2 className="mb-6">Powerful Tools for Affiliate Success</h2>
              <p className="mb-8 text-lg text-paragraph-light dark:text-paragraph-muted">
                Affily combines everything you need to run a profitable affiliate program — from one-click setup to automated payouts. No coding required, no hidden fees.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">✓</span>
                  <span>Dual tracking: Web Pixel + cart attributes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">✓</span>
                  <span>Automatic order cancellation/refund sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">✓</span>
                  <span>JWT-secured affiliate portal</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">✓</span>
                  <span>Zero performance/revenue fees</span>
                </li>
              </ul>
            </div>
          </FadeUpAnimation>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {coreFeaturesData.map((feature, i) => (
              <FadeUpOneByOneAnimation
                key={feature.id}
                i={i}
                className="rounded-medium bg-gray p-6 dark:bg-dark-200">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-paragraph-light dark:text-paragraph-muted">{feature.description}</p>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
