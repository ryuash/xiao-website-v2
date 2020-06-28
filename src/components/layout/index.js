import React from 'react'
import {
  Nav,
  SEO
} from '@components'
import { GlobalCSS } from '@styles'
import { BodyCSS } from './styles'

const Layout = (props) => {
  const {
    children,
    title,
  } = props

  return (
    <>
      <GlobalCSS />
      <SEO title={title} />
      <Nav />
      {/* // body */}
      <BodyCSS>
        {children}
      </BodyCSS>
    </>
  )
}

export default Layout
