import React from 'react'
import { Lightbox } from '@components'
import useScreensize from '@utils/screenSize'
import DesktopGallery from './components/desktop_gallery'
import MobileGallery from './components/mobile_gallery'
import { sizes } from '../../styles/media'

const Gallery = (props) => {
  const { width } = useScreensize()

  if (width < sizes.phone) {
    return (
      <MobileGallery
        {...props}
      />
    )
  }
  return (
    <DesktopGallery
      showLightbox={showLightbox}
      setShowLightbox={setShowLightbox}
      {...props}
    />
  )
}

export default Gallery
