import { useState, useEffect } from 'react'
import { sizes } from '@styles'
import useWindowSize from '@utils/screenSize'

export const useMobileNavHook = () => {
  const [isOpen, toggleOpen] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width >= sizes.tablet) {
      toggleOpen(false)
    }
  }, [width])

  const toggle = () => {
    toggleOpen(!isOpen)
  }

  return {
    isOpen,
    toggle,
  }
}
