import React from "react"
import { graphql, Link } from "gatsby"
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
  return (
    <>
      <SEO title="Baaziz Oussama" />
      <div className="font-sans">
        <div className="container">
          <div className="flex flex-col md:flex-row max-h-screen">
            {/* SideBar */}
            <div className="bg-w-full flex flex-col bg-transparent md:bg-indigo-50  md:bg-opacity-50  md:w-60 md:p-6 md:text-center ">
              <FluidIMG
                filename="profile-pic600"
                className="hidden md:block rounded-full w-40 h-40 mx-auto"
              />

              <p
                id="title"
                className="hidden md:block text-lg m-0 mt-4 font-serif font-bold"
              >
                Baaziz Oussama
              </p>
              <p className="hidden md:block  p-0 m-0 text-md font-serif">
                Software Developer
              </p>

              {/* Social buttons + nav */}
              <div className="flex flex-col-reverse md:flex-col">
                <nav>
                  <ul className="hidden md:flex md:flex-col mt-12">
                    <li>
                      <button
                        className="block font-serif "
                        tabIndex={-42}
                        data-value="about"
                        onClick={() => scrollTo("#about")}
                      >
                        <span>About</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block font-serif"
                        tabIndex={-42}
                        data-value="experience"
                        onClick={() => scrollTo("#experience")}
                      >
                        <span>Experience</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block font-serif"
                        tabIndex={-42}
                        data-value="projects"
                        onClick={() => scrollTo("#projects")}
                      >
                        <span>Projects</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block font-serif"
                        tabIndex={-42}
                        data-value="skills"
                        onClick={() => scrollTo("#skills")}
                      >
                        <span>Skills</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block font-serif"
                        tabIndex={-42}
                        data-value="tools"
                        onClick={() => scrollTo("#tools")}
                      >
                        <span>Tools</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block font-serif"
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
                        className="block font-serif"
                        href="https://drive.google.com/file/d/137df678Vs69xgw4rLpnaLCN31pLfCKIm/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <Link
                        className="block font-serif"
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
                id="about"
                className="h-full pt-3 flex justify-center items-center"
              >
                <Aboutme />
              </section>
              <section id="experience" className="pt-3">
                <Experience />
              </section>
              <section id="projects" className="pt-3">
                <Projects />
              </section>
              <section id="skills" className="pt-3">
                <Skills />
              </section>
              <section id="tools" className="pt-3">
                <Tools />
              </section>
              <section id="contact" className="pt-3">
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
