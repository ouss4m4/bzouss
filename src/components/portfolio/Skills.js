import React from "react"

const Skills = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center font-serif">Skills</h1>
        {/* Skill list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Skill wrap */}
          <div className="flex-col justify-center text-center">
            <h3>Communication</h3>
            <p className="max-w-lg mx-auto">
              Providing solutions to different departments and working with
              diverse teams requires a lot of meetings and reportings. this
              sharpened my communication skills
            </p>
          </div>
          <div className="flex-col justify-center text-center">
            <h3>Critical Thinking</h3>
            <p className="max-w-lg mx-auto">
              Working on digitalization solutions means that non-technical
              clients define the needs. They trust me to make sensible and
              well-thought-out technical decisions.
            </p>
          </div>
          <div className="flex-col justify-center text-center">
            <h3>Time Management</h3>
            <p className="max-w-lg mx-auto">
              My team uses{" "}
              <a href="" rel="noreferrer" target="_blank">
                JIRA®
              </a>{" "}
              to Plan, track, and manage Software development. Creating sprints
              and releases. assigning tasks and delegating projects taught me
              the importance of time.
            </p>
          </div>
          <div className="flex-col justify-center text-center">
            <h3>Punctuality</h3>
            <p className="max-w-lg mx-auto">
              Working in a field with constantly changing demands required all
              our applications to be easily updated and always respect the
              deadline.
            </p>
          </div>

          <div className="flex-col justify-center text-center">
            <h3>Teamwork</h3>
            <p className="max-w-lg mx-auto">
              Teamwork is vital. As a lead developer and a member on the
              Developers team.I have to collaborate effectively with teammates
              where communication is key.
            </p>
          </div>
          <div className="flex-col justify-center text-center">
            <h3>E.Q</h3>
            <p className="max-w-lg mx-auto">
              Understanding one's own emotions. and using them in a positive way
              to relive stress. and communicate effectively to overcome
              challenges is a major factor for teamwork success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
