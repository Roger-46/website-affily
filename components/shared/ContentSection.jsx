'use client'
import Image from 'next/image'
import { FadeUpAnimation } from '@/components/animations'
import ChecklistItem from './ChecklistItem'

const ContentSection = ({
  tagline,
  title,
  description,
  items = [],
  imageSrc,
  imageAlt = '',
  reversed = false,
  ctaText,
  ctaHref = '#pricing',
  bgColor = 'bg-white dark:bg-dark-300',
}) => {
  return (
    <section className={`${bgColor} pb-25 pt-25 max-md:py-20`}>
      <div className="container">
        <div className="relative grid grid-cols-2 items-center gap-25 max-md:grid-cols-1 1xl:gap-x-24">
          {/* Image Column */}
          <FadeUpAnimation className={`relative flex items-center justify-center ${reversed ? '' : 'order-2 max-md:order-2'}`}>
            <div className="w-full max-w-[700px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 651px"
                className="rounded-medium shadow-lg w-full h-auto"
              />
            </div>
          </FadeUpAnimation>

          {/* Text Column */}
          <FadeUpAnimation className={`relative ${reversed ? 'order-2 max-md:order-1' : 'order-1 max-md:order-1'}`}>
            {tagline && <p className="section-tagline">{tagline}</p>}
            <h2 className="mb-8">{title}</h2>
            {description && <p className="mb-11">{description}</p>}

            {items.length > 0 && (
              <ul className="mb-14 max-w-[700px] [&>*:not(:last-child)]:mb-5">
                {items.map((item, index) => (
                  <ChecklistItem key={index} text={item.text} />
                ))}
              </ul>
            )}

            {ctaText && (
              <a className="btn" href={ctaHref}>
                {ctaText}
              </a>
            )}
          </FadeUpAnimation>
        </div>
      </div>
    </section>
  )
}

export default ContentSection
