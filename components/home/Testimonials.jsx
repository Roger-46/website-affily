'use client'
import TestimonialsColumn from './TestimonialsColumn'
import { SectionHeader } from '@/components/shared'
import { testimonials } from '@/data/home'

const Testimonials = () => {
  return (
    <section className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="container relative">
        <SectionHeader
          tagline="Testimonials"
          title="Loved by Thousands of Store Owners"
          align="center"
        />
        <div className="relative z-10">
          <div
            className="relative h-[800px] overflow-hidden max-md:h-[600px]"
            style={{
              maskImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
            }}>
            <div className="flex justify-center gap-6 max-md:justify-center">
              <TestimonialsColumn testimonials={testimonials} duration={25} className="flex-shrink-0" />
              <TestimonialsColumn testimonials={testimonials} duration={20} className="flex-shrink-0 max-md:hidden" />
              <TestimonialsColumn testimonials={testimonials} duration={15} className="flex-shrink-0 max-lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
