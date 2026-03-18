'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const TestimonialsColumn = ({ testimonials, duration = 20, className = '' }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial) => (
              <div
                key={`${index}-${testimonial.id}`}
                className="w-full max-w-sm rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColour-dark">
                  <div className="mb-5">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <blockquote className="mb-7 italic leading-[1.75] text-paragraph dark:text-white">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center border-t border-dashed border-gray-100 pt-7 dark:border-borderColour-dark">
                    <div className="mr-4 h-14 w-14 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{testimonial.author}</h3>
                      <p className="font-jakarta text-sm font-medium text-paragraph-light dark:text-paragraph-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export default TestimonialsColumn
