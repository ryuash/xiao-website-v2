import React from 'react'
import {
  NavBarCSS,
  NavBarIconCSS,
  NavBarLogo
} from './styles'
const MobileNav = (props) => {
  const {
    isOpen,
  } = props

  return (
    <NavBarCSS
      isOpen={isOpen}
    >
      <NavBarLogo>
        <p>[ Xiao ]</p>
      </NavBarLogo>
    </NavBarCSS>
  )
}

export default MobileNav
