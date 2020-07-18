import React from 'react'
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
      <NavBarLogoCSS>
        <Img
          fluid={logo}
        />
      </NavBarLogoCSS>
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
