'use client'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { SectionHeader } from '@/components/shared'

const integrations = [
  { name: 'Shopify', color: '#96BF48' },
  { name: 'PayPal', color: '#003087' },
  { name: 'Klaviyo', color: '#000000' },
  { name: 'Mailchimp', color: '#FFE01B' },
  { name: 'Google Analytics', color: '#E37400' },
  { name: 'Stripe', color: '#635BFF' },
]

const IntegrationCard = ({ name, color }) => (
  <div className="flex flex-col items-center gap-4 rounded-medium border border-dashed border-borderColour bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-nav dark:border-borderColour-dark dark:bg-dark-200 dark:hover:border-primary/30">
    <div
      className="flex h-16 w-16 items-center justify-center rounded-2xl"
      style={{ backgroundColor: `${color}15` }}
    >
      <span className="text-2xl font-bold" style={{ color }}>
        {name.charAt(0)}
      </span>
    </div>
    <span className="text-base font-semibold text-paragraph dark:text-white">{name}</span>
  </div>
)

const IntegrationLogos = () => {
  return (
    <section className="relative bg-gray pb-150 pt-150 dark:bg-dark max-md:py-20">
      <div className="container">
        <SectionHeader
          tagline="INTEGRATIONS"
          title="Works With Your Favorite Tools"
          description="Seamlessly connect Affily with the platforms and tools you already use."
        />
        <div className="grid grid-cols-6 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2">
          {integrations.map((integration, index) => (
            <FadeUpOneByOneAnimation key={integration.name} i={index}>
              <IntegrationCard {...integration} />
            </FadeUpOneByOneAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegrationLogos
