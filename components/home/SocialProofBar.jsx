'use client'
import Marquee from 'react-fast-marquee'
import { FadeUpAnimation } from '@/components/animations'

const brands = [
  'Luxe Beauty Co.',
  'TechGear Store',
  'FitWear',
  'Seoul Skincare',
  'HomeStyle Co.',
  'PetLove Shop',
  'Urban Threads',
  'FreshBite Foods',
  'Artisan Home',
  'GlowUp Studio',
]

const BrandLogo = ({ name }) => (
  <div className="mx-8 flex items-center gap-2.5 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
      <span className="text-lg font-bold text-gray-500">{name.charAt(0)}</span>
    </div>
    <span className="whitespace-nowrap text-base font-semibold text-gray-400">{name}</span>
  </div>
)

const SocialProofBar = () => {
  return (
    <section className="relative bg-white py-16 dark:bg-dark-300 max-md:py-10">
      <div className="container">
        <FadeUpAnimation>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-paragraph-light dark:text-paragraph-muted">
            Trusted by 1,000+ Shopify merchants worldwide
          </p>
        </FadeUpAnimation>
      </div>
      <Marquee speed={40} gradient={false} pauseOnHover>
        {brands.map((brand) => (
          <BrandLogo key={brand} name={brand} />
        ))}
      </Marquee>
    </section>
  )
}

export default SocialProofBar
