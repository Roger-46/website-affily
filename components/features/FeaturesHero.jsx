'use client'
import Link from 'next/link'
import { FadeUpAnimation } from '@/components/animations'

const FeaturesHero = () => {
  return (
    <section className="hero relative overflow-hidden bg-gray pb-[100px] pt-[200px] dark:bg-dark max-lg:pb-20 max-lg:pt-[160px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #f5f8fa 70%)' }} />
      <div className="hidden dark:block pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #131410 70%)' }} />
      <div className="container">
        <FadeUpAnimation className="relative z-10">
          <div className="mx-auto max-w-[750px] text-center">
            <p className="section-tagline">Features</p>
            <h1 className="mb-6">
              Everything You Need to{' '}
              <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-borderColour-light">
                Scale
              </span>{' '}
              Your Affiliate Program
            </h1>
            <p className="mx-auto mb-10 max-w-[600px] text-lg">
              From recruitment to payouts, Affily gives you everything to build, manage, and grow a successful affiliate marketing program on Shopify.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="btn">
                Install Free on Shopify
              </Link>
            </div>
            <p className="mt-6 text-sm text-paragraph-light dark:text-paragraph-muted">
              Trusted by 5,000+ Shopify stores worldwide
            </p>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default FeaturesHero
