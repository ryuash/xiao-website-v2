import React from 'react'
import MobileNav from './components/mobile_nav'
import DesktopNav from './components/desktop_nav'
import { useNavHook } from './hooks'

const Nav = (props) => {
  const { logo } = useNavHook()

  return (
    <>
      <DesktopNav logo={logo} {...props} />
      <MobileNav logo={logo} {...props} />
    </>
  )
}

export default Nav
