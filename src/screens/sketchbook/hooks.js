import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useSketchbookHook = () => {
  const data = useStaticQuery(
    graphql`
    query {
      data: markdownRemark(fileAbsolutePath: {regex: "/sketchbook.md/"}) {
        frontmatter {
          title
        }
      },
      images: allFile(filter: {sourceInstanceName: {eq: "sketchbook"}}, sort: {fields: [relativePath], order: ASC}) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 500) {
                ...GatsbyImageSharpFluid
                presentationWidth
                presentationHeight
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
