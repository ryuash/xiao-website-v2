import React from 'react'
import { DesktopGalleryCSS } from './styles'

const DesktopGallery = (props) => {
  const {
    images,
    handleOnClick,
  } = props

  return (
    <DesktopGalleryCSS>
      {images.map((x, i) => (
        <div className="image-item" key={i}>
          <img
            src={x}
            onClick={() => handleOnClick(i)}
          />
        </div>
      ))}
    </DesktopGalleryCSS>
  )
}

export default DesktopGallery
