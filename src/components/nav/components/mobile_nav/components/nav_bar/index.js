import React from 'react'
import { Link as GastbyLink } from 'gatsby'
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
  return (
    <NavBarCSS
      isOpen={isOpen}
    >
      <GastbyLink to="/">
        <NavBarLogoCSS>
          <Img
            fluid={logo}
          />
        </NavBarLogoCSS>
      </GastbyLink>
    </NavBarCSS>
  )
}

export default MobileNav
