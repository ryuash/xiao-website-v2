import React from 'react'
import {
  Nav,
  SEO
} from '@components'
import { GlobalCSS } from '@styles'
import { BodyCSS, LayoutCSS } from './styles'

const Layout = (props) => {
  const {
    children,
    title,
  } = props

  return (
    <>
      <GlobalCSS />
      <SEO title={title} />
      <LayoutCSS>
        <Nav />
        {/* // body */}
        <BodyCSS>
          {children}
        </BodyCSS>
      </LayoutCSS>
    </>
  )
}

export default Layout
