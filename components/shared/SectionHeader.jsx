'use client'
import { FadeUpAnimation } from '@/components/animations'

const SectionHeader = ({
  tagline,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const textColor = theme === 'dark' ? 'text-white' : ''
  const descriptionColor = theme === 'dark' ? 'text-paragraph-muted' : ''

  if (align === 'split') {
    return (
      <FadeUpAnimation>
        <div className={`relative z-10 mb-16 grid items-center gap-6 md:grid-cols-2 md:gap-12 ${className}`}>
          <h2 className={`text-4xl font-semibold max-md:text-center ${textColor}`}>
            {title}
          </h2>
          {description && (
            <p className={`max-w-sm md:ml-auto max-md:text-center ${descriptionColor}`}>
              {description}
            </p>
          )}
        </div>
      </FadeUpAnimation>
    )
  }

  const alignmentClasses = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <FadeUpAnimation>
      <div className={`mb-16 max-w-[550px] ${alignmentClasses} ${className}`}>
        {tagline && <p className="section-tagline">{tagline}</p>}
        <h2 className={textColor}>{title}</h2>
        {description && (
          <p className={`mt-5 ${descriptionColor}`}>{description}</p>
        )}
      </div>
    </FadeUpAnimation>
  )
}

export default SectionHeader
