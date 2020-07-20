import React from 'react'
import useScreenSize from '@utils/screenSize'
import { sizes } from '@styles/media'
import MobileNav from './components/mobile_nav'
import DesktopNav from './components/desktop_nav'
import { useNavHook } from './hooks'

const Nav = (props) => {
  const { logo } = useNavHook()
  const windowSize = useScreenSize()
  if (windowSize && windowSize.width > sizes.tablet) {
    return <DesktopNav logo={logo} {...props} />
  }

  return (
    <MobileNav logo={logo} {...props} />
  )
}

export default Nav
