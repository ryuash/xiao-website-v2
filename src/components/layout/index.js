import React from 'react'
import {
  Nav,
  SEO
} from '@components'

const Layout = (props) => {
  const {
    children,
    title,
  } = props
  return (
    <>
      <SEO title={title} />
      <Nav />
      {/* // body */}
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
