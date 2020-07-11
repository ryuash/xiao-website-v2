import React from 'react'
import {
  NavBarCSS,
  NavBarIconCSS,
  NavBarLogo
} from './styles'
const MobileNav = (props) => {
  const {
    isOpen,
    toggle,
  } = props

  return (
    <NavBarCSS
      isOpen={isOpen}
    >
      <NavBarLogo>
        <p>[ Xiao ]</p>
      </NavBarLogo>
      <NavBarIconCSS
        onClick={toggle}
        isOpen={isOpen}
      >
        <div />
      </NavBarIconCSS>
    </NavBarCSS>
  )
}

export default MobileNav
