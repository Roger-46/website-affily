'use client'
import { useEffect } from 'react'

const JsDetector = () => {
  useEffect(() => {
    document.body.setAttribute('data-js', 'true')
  }, [])

  return null
}

export default JsDetector
