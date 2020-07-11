import React from 'react'
import {
  Nav,
  SEO,
  Footer,
} from '@components'
import { GlobalCSS } from '@styles'
import { LayoutCSS } from './styles'

const Layout = (props) => {
  const {
    children,
    location,
    title,
    hideFooter = false,
  } = props

  return (
    <>
      <GlobalCSS />
      <SEO title={title} />
      <LayoutCSS>
        {/* // body */}
        <Nav location={location} />
        {children}
        {!hideFooter && <Footer />}
      </LayoutCSS>
    </>
  )
}

export default Layout
