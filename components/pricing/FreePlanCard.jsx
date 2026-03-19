'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  Users,
  BarChart3,
  Link2,
  CreditCard,
  Layers,
  ChevronUp,
  BadgeCheck,
} from 'lucide-react'

const iconMap = { Users, BarChart3, Link2, CreditCard, Layers }

const FreePlanCard = ({ plan, isAnnual }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const price = isAnnual ? plan.priceYearly : plan.priceMonthly
  const period = isAnnual ? 'year' : 'month'

  const featuresWithCategories = plan.featureCategories?.filter((cat) => cat.name) || []
  const featuresWithoutCategories = plan.featureCategories?.find((cat) => !cat.name)?.features || []

  return (
    <div className="w-full rounded-medium bg-gray p-6 shadow-box dark:bg-dark-200">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="mb-1 text-2xl font-bold">{plan.name}</h3>
          <p className="text-sm text-paragraph/70 dark:text-white/70">{plan.description}</p>
        </div>
        <div className="text-right">
          <span className="text-[32px] font-bold">${price}</span>
          <span className="text-sm text-paragraph/60 dark:text-white/60">/{period}</span>
        </div>
      </div>

      <Link
        href={plan.ctaLink}
        className="btn-outline mb-4 block w-full py-3 text-center dark:bg-transparent">
        {plan.cta}
      </Link>

      <div className="border-t border-borderColour pt-4 dark:border-borderColour-dark">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between text-sm font-medium text-paragraph dark:text-white">
          Plan details
          <ChevronUp
            className={`h-4 w-4 transition-transform duration-200 ${
              isExpanded ? '' : 'rotate-180'
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-4">
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 max-md:grid-cols-2 max-sm:grid-cols-1">
              {featuresWithCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <p className="mb-2 text-xs font-medium text-paragraph/50 dark:text-white/50">
                    {category.name}
                  </p>
                  {category.features.map((feature, featureIndex) => {
                    const IconComponent = iconMap[feature.icon]
                    return (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-paragraph/90 dark:text-white/90">
                        {IconComponent && (
                          <IconComponent className="h-4 w-4 flex-shrink-0 text-paragraph/60 dark:text-white/60" />
                        )}
                        <span>{feature.text}</span>
                      </div>
                    )
                  })}
                </div>
              ))}

              {featuresWithoutCategories.map((feature, index) => {
                const IconComponent = iconMap[feature.icon]
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-paragraph/90 dark:text-white/90">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 flex-shrink-0 text-paragraph/60 dark:text-white/60" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-paragraph/70 dark:text-white/70">
        <span>Free forever. No credit card required.</span>
        <BadgeCheck className="h-4 w-4 text-primary" />
      </div>
    </div>
  )
}

export default FreePlanCard
