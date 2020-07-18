import React from 'react'
import { Link as GastbyLink } from 'gatsby'
import Img from 'gatsby-image'
import classNames from 'classnames'
import {
  NavBarCSS,
  NavBarLogoCSS,
  NavItemsContainerCSS,
  Link
} from './styles'
import { navItems } from '../../utils'

const DesktopNav = (props) => {
  const {
    logo,
    location: {
      pathname
    }
  } = props

  return (
    <NavBarCSS>
      <GastbyLink to="/">
        <NavBarLogoCSS>
          <Img
            fluid={logo}
          />
        </NavBarLogoCSS>
      </GastbyLink>
      <NavItemsContainerCSS>
        {navItems.map((x) => {
          return (
            <Link
              key={x.title}
              to={x.link}
              className={classNames({ active: pathname === x.link })}
            >{x.title}</Link>
          )
        })}
      </NavItemsContainerCSS>
    </NavBarCSS>
  )
}

export default DesktopNav
