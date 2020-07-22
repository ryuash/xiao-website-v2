import React from 'react'
import { useMobileNavHook } from './hooks'
import NavBar from './components/nav_bar'
import NavBody from './components/nav_body'
import { NavBarIconCSS } from './styles'
import getScreenSize from '../../../../utils/screenSize'
import { sizes } from '../../../../styles/media'

const MobileNav = (props) => {
  const { width } = getScreenSize()
  const {
    isOpen,
    toggle,
  } = useMobileNavHook(width)

  const shouldDisplay = isOpen && (!width || width <= sizes.tablet)


  return (
    <>
      <NavBarIconCSS
        onClick={toggle}
        isOpen={shouldDisplay}
      >
        <div />
      </NavBarIconCSS>
      <NavBar
        isOpen={shouldDisplay}
        {...props}
      />
      <NavBody
        isOpen={shouldDisplay}
        {...props}
      />
    </>
  )
}

export default MobileNav
