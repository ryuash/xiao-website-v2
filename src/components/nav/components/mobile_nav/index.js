import React from 'react'
import { useSpring } from 'react-spring'
import { useMobileNavHook } from './hooks'
import NavBar from './components/nav_bar'

const MobileNav = () => {
  const {
    isOpen,
    toggle,
  } = useMobileNavHook()

  return (
    <>
      <NavBar
        isOpen={isOpen}
        toggle={toggle}
      />
    </>
  )
}

export default MobileNav
