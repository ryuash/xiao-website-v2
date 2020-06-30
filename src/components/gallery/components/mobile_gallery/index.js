import React from 'react'
import { MobileGalleryCSS } from './styles'

const MobileGallery = (props) => {
  const {
    images,
    handleOnClick,
  } = props

  return (
    <MobileGalleryCSS>
      {
        images.map((x, i) => {
          return (
            <img
              src={x}
              key={i}
              onClick={() => handleOnClick(i)}
            />
          )
        })
      }
    </MobileGalleryCSS>
  )
}

export default MobileGallery
