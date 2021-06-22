import React from "react"
import { Link } from "gatsby"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const LandingPage = ({ data, location }) => {
  return (
    <>
      <div className="container">
        <div className="flex">
          {/* SideBar */}
          <div className="border-r-2 w-60 h-screen">
            <div className="flex-column">
              <div className="my-14">
                <h1 id="title">{data.site.siteMetadata.title}</h1>
              </div>
              <nav>
                <ul className="flex-column gap-8">
                  <li>About</li>
                  <li>Experience</li>
                  <li>Projects</li>
                  <li>Toolset</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <main className="overflow-y-auto max-h-screen no-scrollbar">
            <section id="about" className="min-h-screen">
              <div className="container">
                <h1>Baaziz Oussama</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
              </div>
            </section>
            <section id="experience" className="min-h-screen">
              <div className="container">
                <h1>Experience</h1>
              </div>
            </section>
            <section id="projects" className="min-h-screen">
              <div className="container">
                <h1>Projects</h1>
              </div>
            </section>
            <section id="skills" className="min-h-screen">
              <div className="container">
                <h1>Skills</h1>
              </div>
            </section>
            <section id="Toolset" className="min-h-screen">
              <div className="container">
                <h1>Tools</h1>
              </div>
            </section>
            <section id="contact" className="min-h-screen">
              <div className="container">
                <h1>Contact</h1>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
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

{
  /* <div className="social">
          <a href="https://github.com/ouss4m4" className="icon">
            <AiFillGithub size={50} />
          </a>
          <a href="https://twitter.com/0uss4m4" className="icon">
            <AiFillTwitterCircle size={50} />
          </a>
          <a href="https://linkedin.com/in/bzouss" className="icon">
            <AiFillLinkedin size={50} />
          </a>
          <a className="icon">
            <SiGmail size={50} />
          </a>
        </div> */
}
