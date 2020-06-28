import React from 'react'
import Img from 'gatsby-image'
import { useImageHook } from './hooks'

const Image = (props) => {
  const { source } = props
  return (
    <Img fluid={source} />
  )
}

export default Image
