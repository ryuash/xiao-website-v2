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
        <div className="image-item" key={i}>
          <ImgOverrideCSS
            fluid={x}
            onClick={() => handleOnClick(i)}
          />
        </div>
      ))}
    </GalleryCSS>
  )
}

export default Gallery
