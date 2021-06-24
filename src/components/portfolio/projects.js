import React from "react"
import { ProjectCard } from "./ProjectCard"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          projects {
            title
            desc
            imgName
            code
            live
            tags
          }
        }
      }
    }
  `)
  const projects = data.site.siteMetadata.projects
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Projects</h1>
          <div className="flex">
            {projects.map((p, i) => (
              <ProjectCard
                title={p.title}
                desc={p.desc}
                tags={p.tags}
                imgName={p.imgName}
                code={p.code}
                live={p.live}
                key={p.imgName}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
