import React, { useEffect } from "react"
/* import { Link } from "gatsby"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import Projects from "../components/portfolio/projects"
*/

const LandingPage = ({ data, location }) => {
  const aboutRef = React.useRef(null)
  const expRef = React.useRef(null)
  const projRef = React.useRef(null)
  const skillRef = React.useRef(null)
  const toolsRef = React.useRef(null)
  const contactRef = React.useRef(null)

  useEffect(() => {
    let observer
    if (aboutRef && expRef && projRef && skillRef && toolsRef && contactRef) {
      const options = {
        threshold: 0.5,
      }
      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const navElement = document.querySelector(
            `a[href="#${entry.target.id}"]`
          )

          if (entry.isIntersecting) {
            if (!navElement.classList.contains("active")) {
              navElement.classList.add("active")
            }
          } else if (navElement.classList.contains("active")) {
            navElement.classList.remove("active")
          }
        })
      }, options)

      observer.observe(aboutRef.current)
      observer.observe(expRef.current)
      observer.observe(projRef.current)
      observer.observe(skillRef.current)
      observer.observe(toolsRef.current)
      observer.observe(contactRef.current)
    }
    return () => observer.disconnect()
  }, [aboutRef, expRef, projRef, skillRef, toolsRef, contactRef])

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
                <ul className="flex-col gap-8">
                  <a className="block" href="#about">
                    About
                  </a>
                  <a className="block" href="#experience">
                    Experience
                  </a>
                  <a className="block" href="#projects">
                    Projects
                  </a>
                  <a className="block" href="#skills">
                    Skills
                  </a>
                  <a className="block" href="#tools">
                    Tools
                  </a>
                  <a className="block" href="#contact">
                    Contact
                  </a>
                </ul>
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <main className="overflow-y-auto max-h-screen no-scrollbar">
            <section ref={aboutRef} id="about" className="min-h-screen">
              <div className="container">
                <h1>Baaziz Oussama</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
              </div>
            </section>
            <section ref={expRef} id="experience" className="min-h-screen">
              <div className="container">
                <h1>Experience</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
              </div>
            </section>
            <section ref={projRef} id="projects" className="min-h-screen">
              <div className="container">
                <div className="card">
                  <h1>Projects</h1>
                  <h3>SnapShot</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate animi soluta quasi atque laudantium possimus cum
                    maxime obcaecati illo deleniti exercitationem at facere
                    dolorum, excepturi, incidunt aliquam voluptatum voluptas
                    alias.
                  </p>
                </div>
              </div>
            </section>
            <section ref={skillRef} id="skills" className="min-h-screen">
              <div className="container">
                <h1>Skills</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
              </div>
            </section>
            <section ref={toolsRef} id="tools" className="min-h-screen">
              <div className="container">
                <h1>Tools</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
              </div>
            </section>
            <section ref={contactRef} id="contact" className="min-h-screen">
              <div className="container">
                <h1>Contact</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi soluta quasi atque laudantium possimus cum
                  maxime obcaecati illo deleniti exercitationem at facere
                  dolorum, excepturi, incidunt aliquam voluptatum voluptas
                  alias.
                </p>
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
