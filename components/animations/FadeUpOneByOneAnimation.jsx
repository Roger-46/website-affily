'use client'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeUpOneByOneAnimation = ({ children, className, i = 0 }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeUpOneByOneAnimation
