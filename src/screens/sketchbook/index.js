import React from 'react'
import { Layout, Gallery, Lightbox } from '@components'
import { useSketchbookHook } from './hooks'
import { SketchbookCSS } from './styles'
import { useLightboxHook } from '../../components/lightbox/hooks'

const Design = (props) => {
  const { images, title } = useSketchbookHook()
  const {
    showLightbox,
    toggleLightbox,
    selectedIdx,
    handlePrevImage,
    handleNextImage,
    setSelectedIdx,
    handleOnClick,
  } = useLightboxHook(images)
  console.log(images, 'images here?')
  return (
    <>
      {showLightbox && selectedIdx !== null && (
        <Lightbox
          images={images}
          toggleLightbox={toggleLightbox}
          selectedIdx={selectedIdx}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />
      )}
      <Layout
        title={title}
        {...props}
      >
        <SketchbookCSS>
          <Gallery
            images={images}
            toggleLightbox={toggleLightbox}
            setSelectedIdx={setSelectedIdx}
            handleOnClick={handleOnClick}
          />
        </SketchbookCSS>
      </Layout>
    </>
  )
}

export default Design
