import React from 'react'
import { useMobileNavHook } from './hooks'
import NavBar from './components/nav_bar'
import NavBody from './components/nav_body'
import { NavBarIconCSS } from './styles'

const MobileNav = (props) => {
  const {
    isOpen,
    toggle,
  } = useMobileNavHook()

  return (
    <>
      <NavBarIconCSS
        onClick={toggle}
        isOpen={isOpen}
      >
        <div />
      </NavBarIconCSS>
      <NavBar
        isOpen={isOpen}
      />
      <NavBody
        isOpen={isOpen}
        {...props}
      />
    </>
  )
}

export default MobileNav
