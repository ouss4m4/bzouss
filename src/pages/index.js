import React /*  ,{ useEffect } */ from "react"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import FluidIMG from "../images/FluidIMG"
import { SiGmail } from "react-icons/si"
import scrollTo from "gatsby-plugin-smoothscroll"
import SEO from "../components/seo"
import {
  Aboutme,
  Experience,
  Projects,
  Skills,
  Tools,
  Contact,
} from "../components/portfolio"

const LandingPage = ({ data, location }) => {
  const aboutRef = React.useRef(null)
  const expRef = React.useRef(null)
  const projRef = React.useRef(null)
  const skillRef = React.useRef(null)
  const toolsRef = React.useRef(null)
  const contactRef = React.useRef(null)

  /* useEffect(() => {
    let observer
    if (aboutRef && expRef && projRef && skillRef && toolsRef && contactRef) {
      const options = {
        threshold: 0.5,
      }
      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const navElement = document.querySelector(
            `button[data-value="${entry.target.id}"]`
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
  }, [aboutRef, expRef, projRef, skillRef, toolsRef, contactRef]) */

  return (
    <>
      <SEO title="Baaziz Oussama" />
      <div className="container">
        <div className="flex">
          {/* SideBar */}
          <div className="border-r-2 w-60 h-screen text-center">
            <div className="flex-column">
              {/* <div className="avatar">
                <FluidIMG
                  filename="profile-pic"
                  className="rounded-full w-40 h-40 mx-auto mt-10 border"
                />
              </div> */}
              <div className="">
                <h1 id="title">Baaziz Oussama</h1>
              </div>
              <p>Software Developer</p>

              <nav>
                <ul className="flex-col gap-8">
                  <li>
                    <button
                      className="block "
                      tabIndex={-42}
                      data-value="about"
                      onClick={() => scrollTo("#about")}
                    >
                      <span>About</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="block"
                      tabIndex={-42}
                      data-value="experience"
                      onClick={() => scrollTo("#experience")}
                    >
                      <span>Experience</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="block"
                      tabIndex={-42}
                      data-value="projects"
                      onClick={() => scrollTo("#projects")}
                    >
                      <span>Projects</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="block"
                      tabIndex={-42}
                      data-value="skills"
                      onClick={() => scrollTo("#skills")}
                    >
                      <span>Skills</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="block"
                      tabIndex={-42}
                      data-value="tools"
                      onClick={() => scrollTo("#tools")}
                    >
                      <span>Tools</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="block"
                      tabIndex={-42}
                      data-value="contact"
                      onClick={() => scrollTo("#contact")}
                    >
                      <span>Contact</span>
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="flex ">
                <a
                  href="https://github.com/ouss4m4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={40} />
                </a>
                <a
                  href="https://twitter.com/0uss4m4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle size={40} />
                </a>
                <a
                  href="https://linkedin.com/in/bzouss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={40} />
                </a>
                <a href="/#">
                  <SiGmail size={40} />
                </a>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <main className="overflow-y-auto max-h-screen no-scrollbar">
            <section ref={aboutRef} id="about" className="min-h-screen pt-3">
              <Aboutme />
            </section>
            <section
              ref={expRef}
              id="experience"
              className="min-h-screen pt-3 "
            >
              <Experience />
            </section>
            <section ref={projRef} id="projects" className="min-h-screen pt-3">
              <Projects />
            </section>
            <section ref={skillRef} id="skills" className="min-h-screen pt-3">
              <Skills />
            </section>
            <section ref={toolsRef} id="tools" className="min-h-screen pt-3">
              <Tools />
            </section>
            <section
              ref={contactRef}
              id="contact"
              className="min-h-screen pt-3"
            >
              <Contact />
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
