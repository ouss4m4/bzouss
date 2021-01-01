import React from "react"
import { Link } from "gatsby"
import splash from "../../content/assets/splash.jpeg"

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
      {/* <div className="overlay"></div> */}
      {/* <Image  fluid={bg} /> */}
      {/* <img className="bg-image" src={splash} role="background" /> */}
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
          <Link to={"/blog"}>
            <span>Read my blog</span>
          </Link>
        </p>
        <p>
          Contact Me: <AiFillGithub /> <AiFillTwitterCircle />{" "}
          <AiFillLinkedin /> <SiGmail />{" "}
        </p>
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
