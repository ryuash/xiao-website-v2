import React from 'react'
import { GalleryCSS, ImgOverrideCSS } from './styles'

const Gallery = (props) => {
  const {
    images,
    handleOnClick,
  } = props

  return (
    <GalleryCSS>
      {images.map((x, i) => (
        <div
          className="image-item"
          key={i}
          onClick={() => handleOnClick(i)}
        >
          <ImgOverrideCSS
            fluid={x}
          />
        </div>
      ))}
    </GalleryCSS>
  )
}

export default Gallery
