import React from 'react'
import Img from 'gatsby-image'
import {
  NavBarCSS,
  NavBarLogoCSS
} from './styles'

const MobileNav = (props) => {
  const {
    isOpen,
    logo
  } = props
  console.log(logo, 'in mo')
  return (
    <NavBarCSS
      isOpen={isOpen}
    >
      <NavBarLogoCSS>
        <Img
          fluid={logo}
        />
      </NavBarLogoCSS>
    </NavBarCSS>
  )
}

export default MobileNav
