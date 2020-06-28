import React from 'react'
import Img from 'gatsby-image'
import { Layout, Image } from '@components'
import { LinkedInIcon } from '@icons'
import { useHomeHook } from './hooks'
import {
  ProfileContainer,
  AboutContainer,
  AboutContainerText,
  ContactContainerText,
  SocialMediaContainer
} from './styles'

const Home = () => {
  const {
    about,
    title,
    profileImg,
    contact,
    linkedin,
  } = useHomeHook()

  return (
    <Layout title={title}>
      <div>
        <ProfileContainer>
          <Img fluid={profileImg} />
        </ProfileContainer>
        <AboutContainer>
          <AboutContainerText>
            {about}
          </AboutContainerText>
          <br />
          <ContactContainerText>
            {contact}
          </ContactContainerText>
          <SocialMediaContainer>
            <a
              href={linkedin}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </SocialMediaContainer>
        </AboutContainer>
      </div>
    </Layout>
  )
}

export default Home
