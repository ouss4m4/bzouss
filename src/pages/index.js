import React /* , { useEffect } */ from "react"
import { Link } from "gatsby"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import scrollTo from "gatsby-plugin-smoothscroll"
import FluidIMG from "../images/FluidIMG"
import { SiGmail } from "react-icons/si"
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
      <div className="font-sans">
        <div className="container">
          <div className="flex flex-col md:flex-row max-h-screen">
            {/* SideBar */}
            <div className="w-full flex flex-col  md:w-60 md:p-6 md:text-center ">
              <FluidIMG
                filename="profile-pic"
                className="hidden md:block rounded-full w-40 h-40 mx-auto"
              />
              <p
                id="title"
                className="hidden md:block text-lg m-0 mt-4 font-bold"
              >
                Baaziz Oussama
              </p>
              <p className="hidden md:block  p-0 m-0 text-md ">
                Software Developer
              </p>

              {/* Social buttons + nav */}
              <div className="flex flex-col-reverse md:flex-col">
                <nav>
                  <ul className="hidden md:flex md:flex-col mt-12">
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
                    <li>
                      <a
                        style={{ textAlign: "left", color: "black" }}
                        className="block"
                        href="https://docs.google.com/document/d/1fNbYQ2YuIj38Rm0JkPM8DpHQvtJ419zkzAM-h7xOqKs/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <Link
                        className="block"
                        style={{ textAlign: "left", color: "black" }}
                        to="/blog"
                      >
                        Blog
                      </Link>{" "}
                    </li>
                  </ul>
                </nav>
                <hr />

                <div className="flex items-center justify-center gap-5 my-3 md:hidden">
                  <a
                    style={{ textAlign: "left", color: "black" }}
                    className="block"
                    href="https://docs.google.com/document/d/1fNbYQ2YuIj38Rm0JkPM8DpHQvtJ419zkzAM-h7xOqKs/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <Link
                    className="block"
                    style={{ textAlign: "left", color: "black" }}
                    to="/blog"
                  >
                    Blog
                  </Link>{" "}
                </div>
                <div className="flex gap-2 m-0 pt-4 justify-center">
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
                    style={{ color: "#0a66c2" }}
                  >
                    <AiFillLinkedin size={40} />
                  </a>
                  <a href="mailto:bz.oussama@gmail.com">
                    <SiGmail size={40} />
                  </a>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <main className="overflow-auto h-screen no-scrollbar">
              <section
                ref={aboutRef}
                id="about"
                className="h-full pt-3 flex justify-center items-center"
              >
                <Aboutme />
              </section>
              <section ref={expRef} id="experience" className="pt-3">
                <Experience />
              </section>
              <section ref={projRef} id="projects" className="pt-3">
                <Projects />
              </section>
              <section ref={skillRef} id="skills" className="pt-3">
                <Skills />
              </section>
              <section ref={toolsRef} id="tools" className="pt-3">
                <Tools />
              </section>
              <section ref={contactRef} id="contact" className="pt-3">
                <Contact />
              </section>
            </main>
          </div>
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
