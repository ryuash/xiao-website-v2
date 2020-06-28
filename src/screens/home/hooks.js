import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useHomeHook = () => {
  const data = useStaticQuery(
    graphql`
    query {
      profilePicture: file(relativePath: {eq: "duck_icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      content: markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
        frontmatter {
          title
        }
        excerpt
      }
    }
    `,
  )
  return {
    data
  }
}
