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
          contact
          profileImg {
            childImageSharp {
              fluid(maxWidth: 700) {
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
      contact,
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
    contact,
  }
}
