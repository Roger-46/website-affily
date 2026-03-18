'use client'
import { useEffect, useRef, useState } from 'react'

const CounterAnimation = ({ number, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)
  const isDecimal = number % 1 !== 0
  const duration = 2000

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = number * easeOutQuart

            setCount(currentValue)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(number)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [number, duration, hasAnimated])

  const displayValue = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString()

  return (
    <span className="counter" ref={counterRef}>
      {displayValue}{suffix}
    </span>
  )
}

export default CounterAnimation
