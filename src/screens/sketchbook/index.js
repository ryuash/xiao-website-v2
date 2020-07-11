import React from 'react'
import { Layout, Gallery, Lightbox } from '@components'
import { useSketchbookHook } from './hooks'
import { SketchbookCSS } from './styles'
import { useLightboxHook } from '../../components/lightbox/hooks'

const Design = () => {
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

  return (
    <>
      {!!showLightbox && (
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
