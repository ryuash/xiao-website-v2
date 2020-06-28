import React from 'react'
import { Layout, Image } from '@components'
import { useHomeHook } from './hooks'

const Home = () => {
  const { data: {
    profilePicture: {
      childImageSharp: {
        fluid: profileImage
      }
    },
    content: {
      frontmatter: {
        title
      }
    }
  } } = useHomeHook()

  return (
    <Layout title={title}>
      <div style={{ width: '100px' }}>
        <Image source={profileImage} />
      </div>
    </Layout>
  )
}

export default Home
