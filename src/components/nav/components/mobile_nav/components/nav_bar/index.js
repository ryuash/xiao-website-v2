import React from 'react'
import {
  NavBarCSS,
  NavBarLogoCSS
} from './styles'
const MobileNav = (props) => {
  const {
    isOpen,
  } = props

  return (
    <NavBarCSS
      isOpen={isOpen}
    >
      <NavBarLogoCSS>
        <p>[ Xiao ]</p>
      </NavBarLogoCSS>
    </NavBarCSS>
  )
}

export default MobileNav
