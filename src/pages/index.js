import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"

const LandingPage = ({ data, location }) => {
  return (
    <>
      <Header />
    </>
  )
}

export default LandingPage
/* 
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
 */
