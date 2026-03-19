'use client'
import Link from 'next/link'
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
}

const PricingCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.priceYearly : plan.priceMonthly
  const period = isAnnual ? 'year' : 'month'
  const isDark = plan.theme === 'dark'

  return (
    <div className="flex h-full w-full">
      <div
        className={`flex h-full w-full flex-col rounded-medium p-6 shadow-box ${
          isDark ? 'bg-dark-200' : 'bg-white dark:bg-dark-200'
        }`}>
        <div className="mb-2 flex items-center gap-3">
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : ''}`}>{plan.name}</h3>
          {plan.badge && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                plan.badgeVariant === 'shopify'
                  ? 'bg-[#95bf47] text-white'
                  : plan.badgeVariant === 'featured'
                    ? 'bg-[#e8f5e9] text-[#2e7d32]'
                    : 'bg-primary/10 text-primary'
              }`}>
              {plan.badgeVariant === 'featured' && <Sparkles className="h-3 w-3" />}
              {plan.badge}
            </span>
          )}
        </div>

        <p className={`mb-6 text-sm ${isDark ? 'text-white/70' : 'text-paragraph/70 dark:text-white/70'}`}>
          {plan.description}
        </p>

        <div className="mb-6">
          <span className={`text-[40px] font-bold ${isDark ? 'text-white' : ''}`}>
            ${price}
          </span>
          <span className={`text-sm ${isDark ? 'text-white/60' : 'text-paragraph/60 dark:text-white/60'}`}>
            /{period}
          </span>
        </div>

        {plan.featured ? (
          <Link
            href={plan.ctaLink}
            className="btn mb-6 w-full py-3 text-center">
            {plan.cta}
          </Link>
        ) : (
          <Link
            href={plan.ctaLink}
            className={`btn-outline mb-6 w-full py-3 text-center ${
              isDark ? 'border-transparent bg-white text-dark hover:bg-gray hover:border-transparent' : 'dark:bg-transparent'
            }`}>
            {plan.cta}
          </Link>
        )}

        <div className={`flex-1 border-t pt-4 ${isDark ? 'border-white/10' : 'border-borderColour dark:border-borderColour-dark'}`}>
          <p className={`mb-4 text-sm font-medium ${isDark ? 'text-white' : 'text-paragraph dark:text-white'}`}>
            Plan details
          </p>

          <div>
            {plan.featureCategories?.map((category, catIndex) => (
              <div key={catIndex} className="mb-4">
                {category.name && (
                  <p
                    className={`mb-2 text-xs font-medium ${
                      isDark ? 'text-white/70' : 'text-paragraph/50 dark:text-white/50'
                    }`}>
                    {category.name}
                  </p>
                )}
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => {
                    const IconComponent = iconMap[feature.icon]
                    return (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-2 text-sm ${
                          feature.bold ? 'font-semibold' : ''
                        } ${isDark ? 'text-white' : 'text-paragraph/90 dark:text-white/90'}`}>
                        {IconComponent && (
                          <IconComponent
                            className={`h-4 w-4 flex-shrink-0 ${
                              isDark ? 'stroke-white text-white' : 'text-paragraph/60 dark:text-white/60'
                            }`}
                          />
                        )}
                        <span className={isDark ? 'text-white' : ''}>{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
