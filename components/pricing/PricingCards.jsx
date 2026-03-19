'use client'
import Link from 'next/link'
import { pricingPlans } from '@/data/pricing'
import { FadeUpAnimation } from '@/components/animations'
import {
  Users,
  BarChart3,
  Link2,
  CreditCard,
  Settings,
  LayoutDashboard,
  Layers,
  Globe,
  Check,
  Store,
  Palette,
  Clock,
  Mail,
  Sparkles,
} from 'lucide-react'

const iconMap = {
  Users, BarChart3, Link2, CreditCard, Settings, LayoutDashboard,
  Layers, Globe, Check, Store, Palette, Clock, Mail, Sparkles,
}

const PricingCards = () => {
  const plan = pricingPlans[0]

  return (
    <section className="relative overflow-hidden pb-150 pt-150 dark:bg-dark-300 max-md:py-20" style={{ backgroundColor: '#f5f8fa' }}>
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
      <div className="pointer-events-none absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #131410 70%)' }} />

      <div className="container relative z-10">
        <FadeUpAnimation>
          <div className="mx-auto mb-12 max-w-[700px] text-center">
            <p className="section-tagline">Pricing</p>
            <h1 className="mb-6">
              Completely Free. <br />
              No Catch.
            </h1>
            <p className="mb-4 text-paragraph/80 dark:text-white/80">
              Affily is 100% free during early access. All features included — unlimited programs, unlimited affiliates, zero revenue fees.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#d4f5d4] px-4 py-2 text-sm font-medium text-[#2d7d2d]">
              <Sparkles className="h-4 w-4" />
              Early Access — All Features Unlocked
            </span>
          </div>
        </FadeUpAnimation>

        {/* Single Free Plan Card */}
        <FadeUpAnimation>
          <div className="mx-auto max-w-[900px]">
            <div className="rounded-medium bg-white p-8 shadow-box dark:bg-dark-200">
              {/* Header */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-6 border-b border-borderColour pb-8 dark:border-borderColour-dark">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <h2 className="text-3xl font-bold">{plan.name}</h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f5e9] px-3 py-1 text-xs font-medium text-[#2e7d32]">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-paragraph/70 dark:text-white/70">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[56px] font-bold leading-none">$0</span>
                    <span className="text-lg text-paragraph/60 dark:text-white/60">/forever</span>
                  </div>
                  <p className="mt-1 text-sm text-paragraph/50 dark:text-white/50">No credit card required</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-8 grid grid-cols-3 gap-x-10 gap-y-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {plan.featureCategories?.map((category, catIndex) => (
                  <div key={catIndex}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-paragraph/50 dark:text-white/50">
                      {category.name}
                    </p>
                    <ul className="space-y-2.5">
                      {category.features.map((feature, featureIndex) => {
                        const IconComponent = iconMap[feature.icon]
                        return (
                          <li
                            key={featureIndex}
                            className={`flex items-center gap-2.5 text-sm ${
                              feature.bold ? 'font-semibold' : ''
                            } text-paragraph/90 dark:text-white/90`}>
                            {IconComponent && (
                              <IconComponent className="h-4 w-4 flex-shrink-0 text-primary" />
                            )}
                            <span>{feature.text}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href={plan.ctaLink} className="btn px-10 py-3.5 text-center">
                  {plan.cta}
                </Link>
                <Link href="/demo" className="btn-outline px-10 py-3.5 text-center">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PricingCards
