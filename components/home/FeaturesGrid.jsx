'use client'
import { FadeUpOneByOneAnimation } from '@/components/animations'
import { SectionHeader, FeatureCard } from '@/components/shared'
import { features } from '@/data/home'

const FeaturesGrid = () => {
  return (
    <section className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="container">
        <SectionHeader
          tagline="FEATURES"
          title="Everything You Need to Grow Your Affiliate Program"
          description="Powerful tools to recruit, manage, and reward affiliates — all from your Shopify dashboard."
        />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {features.map((feature, index) => (
            <FadeUpOneByOneAnimation key={feature.id} i={index}>
              <FeatureCard
                icon={<feature.icon className="h-6 w-6 stroke-primary" />}
                title={feature.title}
                description={feature.description}
                theme="light"
              />
            </FadeUpOneByOneAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
