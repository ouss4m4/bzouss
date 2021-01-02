import React from "react"
import { Link } from "gatsby"

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const LandingPage = ({ data, location }) => {
  const bg = data.file.childImageSharp.fluid
  return (
    <div className="lander">
      <div className="intro">
        <h1 id="title">{data.site.siteMetadata.title}</h1>
        <p id="subtitle">
          Hello. I am Ouss. I build web applications to help businesses with
          digitalization and modern constraints
        </p>
        <p>
          I like to write about my progress and different complexity i face in
          my daily work, and how i troubleshoot the problems i encounter and
          provide a solid solution.{" "}
          <Link to={"/blog"} id="blog-link">
            <span>Read my blog</span>
          </Link>
        </p>
        <div className="social">
          <a href="https://github.com/ouss4m4" className="icon">
            <AiFillGithub size={50} />{" "}
          </a>
          <a href="https://twitter.com/0uss4m4" className="icon">
            {" "}
            <AiFillTwitterCircle size={50} />{" "}
          </a>
          <a herf="www.linkedin.com/in/bzouss" className="icon">
            <AiFillLinkedin size={50} />
          </a>
          <a className="icon">
            <SiGmail size={50} />{" "}
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

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
    file(absolutePath: { regex: "/splash/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
