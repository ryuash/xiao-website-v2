import React from 'react'
import useScreenSize from '@utils/screenSize'
import { sizes } from '@styles/media'
import MobileNav from './components/mobile_nav'
import DesktopNav from './components/desktop_nav'

const Nav = (props) => {
  const windowSize = useScreenSize()
  if (windowSize.width <= sizes.tablet) {
    return <MobileNav {...props} />
  }

  return (
    <DesktopNav {...props} />
  )
}

export default Nav
