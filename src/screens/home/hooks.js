import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useHomeHook = () => {
  const {
    data
  } = useStaticQuery(
    graphql`
    query {
      data: markdownRemark(fileAbsolutePath: {regex: "/home.md/"}) {
        frontmatter {
          linkedin
          title
          about
          contactOne
          contactTwo
          email
          profileAlt
          profileImg {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `,
  )
  const {
    frontmatter: {
      linkedin,
      about,
      title,
      contactOne,
      contactTwo,
      email,
      profileAlt,
      profileImg: {
        childImageSharp: {
          fluid: profileImg
        }
      }
    }
  } = data

  return {
    about,
    title,
    profileImg,
    contactOne,
    contactTwo,
    email,
    profileAlt
  }
}
