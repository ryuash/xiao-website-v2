import React from 'react'
import classNames from 'classnames'
import { useTransition } from 'react-spring'
import { Link } from 'gatsby'
import {
  NavBodyCSS,
  NavItemCSS,
} from './styles'
import { navItems } from '../../../../utils'

const NavBody = (props) => {
  const {
    isOpen,
    location: {
      pathname
    }
  } = props

  // const overlayAnimation = useSpring({
  //   // opacity: isOpen ? 0.7 : 0,
  //   display: isOpen ? 'flex' : 'none',
  //   background: isOpen ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)'
  // })

  const transitions = useTransition(isOpen, null, {
    enter: item => async (next, cancel) => {
      await next({ display: 'flex' })
      await next({ opacity: '1' })
    },
    leave: item => async (next, cancel) => {
      await next({ opacity: '0' })
      await next({ display: 'none' })
    },
    from: {
      display: 'none',
      opacity: '0'
    },
  })

  return (
    transitions.map(({ item, key, props }) =>
      item && (
        <NavBodyCSS style={props}>
          {navItems.map((x) => {
            return (
              <NavItemCSS key={x.title}>
                <Link to={x.link} className={classNames({ active: pathname === x.link })}>
                  {x.title}
                </Link>
              </NavItemCSS>
            )
          })}
        </NavBodyCSS>
      )
    )
  )
}

export default NavBody
