import React from 'react'
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
    location: {
      pathname
    }
  } = props

  return (
    <NavBarCSS>
      <NavBarLogoCSS>
        <p>[ Xiao ]</p>
      </NavBarLogoCSS>
      <NavItemsContainerCSS>
        {navItems.map((x) => {
          console.log(pathname == x.link)
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
