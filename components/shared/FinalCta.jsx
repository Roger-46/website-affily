'use client'
import Link from 'next/link'
import { FadeUpAnimation } from '@/components/animations'

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-3 shrink-0"
  >
    <path
      d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
      className="stroke-white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const trustBadges = [
  'Free 14-Day Trial',
  'No Credit Card Required',
  'Cancel Anytime',
]

const FinalCta = ({
  heading = 'Ready to Grow Your Affiliate Revenue?',
  description = 'Join thousands of Shopify merchants who maximize their sales with Affily affiliate marketing.',
  primaryButton = {
    text: 'Install Free on Shopify',
    href: '#',
    external: false,
  },
  secondaryButton = null,
  showTrustBadges = true,
}) => {
  return (
    <section id="final-cta-section" className="relative overflow-hidden bg-dark-300 pb-150 pt-150 max-md:py-20">
      {/* Grid background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial fade overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #191a17 70%)' }}
      />

      <div className="container relative z-10">
        <FadeUpAnimation>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-5 text-[48px] font-semibold leading-tight text-white max-lg:text-[32px] max-md:text-[28px]">
              {heading}
            </h2>
            <p className="mx-auto mb-12 max-w-[450px] text-white/80 max-lg:mt-6">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryButton.href}
                target={primaryButton.external ? '_blank' : undefined}
                rel={primaryButton.external ? 'noopener noreferrer' : undefined}
                className="rounded-[30px] bg-primary px-[30px] py-[13px] font-medium text-white transition-all hover:bg-primary/90"
              >
                {primaryButton.text}
              </Link>
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  target={secondaryButton.external ? '_blank' : undefined}
                  rel={secondaryButton.external ? 'noopener noreferrer' : undefined}
                  className="rounded-[30px] border border-white bg-transparent px-[30px] py-[13px] font-medium text-white transition-all hover:bg-white hover:text-dark"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>

            {showTrustBadges && (
              <ul className="mx-auto mt-16 flex max-w-[700px] items-center justify-center gap-8 max-lg:mt-10 max-md:flex-col max-md:gap-4">
                {trustBadges.map((badge) => (
                  <li key={badge} className="flex items-center">
                    <CheckIcon />
                    <p className="text-white">{badge}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default FinalCta
