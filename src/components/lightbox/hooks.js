import { useState } from 'react'

export const useLightboxHook = (images) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(null)
  const handleNextImage = () => {
    // console.log(selectedIdx + 1)
    setSelectedIdx((selectedIdx + 1) % (images.length))
  }

  const handlePrevImage = () => {
    if (selectedIdx !== 0) {
      setSelectedIdx(selectedIdx - 1)
    } else {
      setSelectedIdx(images.length - 1)
    }
  }

  const toggleLightbox = () => {
    setShowLightbox(!showLightbox)
  }

  const handleOnClick = (index) => {
    setSelectedIdx(index)
    toggleLightbox()
  }

  return {
    showLightbox,
    toggleLightbox,
    selectedIdx,
    handlePrevImage,
    handleNextImage,
    setSelectedIdx,
    handleOnClick,
  }
}
