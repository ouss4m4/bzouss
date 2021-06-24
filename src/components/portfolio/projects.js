import React from "react"
import { ProjectCard } from "./ProjectCard"

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Projects</h1>
          <ProjectCard
            title="SnapShot"
            desc="Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load"
            tags={["Heroku", "MongoDB", "React", "Express"]}
            imgName={"snapshot-mern"}
          />
        </div>
      </div>
    </>
  )
}

export default Projects
