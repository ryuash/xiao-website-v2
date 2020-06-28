import { useEffect, useState } from 'react'

export const useIllustrationsHook = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const result = []
    for (let i = 0; i < 9; i += 1) {
      result.push('https://source.unsplash.com/random')
    }
    setImages([...result, 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80'])
  }, [])
  return {
    images
  }
}
