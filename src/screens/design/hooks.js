import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useDesignHook = () => {
  const data = useStaticQuery(
    graphql`
    query {
      data: markdownRemark(fileAbsolutePath: {regex: "/design.md/"}) {
        frontmatter {
          title
        }
      },
      images: allFile(filter: {sourceInstanceName: {eq: "design"}}, sort: {fields: [relativePath], order: ASC}) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1400) {
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
    data: {
      frontmatter: {
        title
      }
    },
    images: {
      edges
    }
  } = data

  const images = edges.map((x) => x.node.childImageSharp.fluid)

  return {
    title,
    images: images,
  }
}
