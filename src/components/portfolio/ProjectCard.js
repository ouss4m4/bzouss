import React from "react"
import FluidIMG from "../../images/FluidIMG"

export const ProjectCard = ({ title, imgName, desc, tags }) => {
  tags = tags ? tags : []
  function renderTags(tags) {
    return (
      <div className="px-6 pt-4 pb-2">
        {tags.map((t, i) => (
          <span
            key={i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {"#" + t}
          </span>
        ))}
      </div>
    )
  }
  return (
    <>
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="w-full">
            <FluidIMG filename={imgName} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
          {renderTags(tags)}
        </div>
      </div>
    </>
  )
}
