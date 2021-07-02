import React from "react"
import FluidIMG from "../../images/FluidIMG"

export const ProjectCard = ({ title, imgName, desc, live, code, tags }) => {
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
      <div className="p-8">
        <div className="max-w-xl rounded overflow-hidden shadow-lg  h-full">
          <div className="w-full flex-grow p-4">
            <FluidIMG filename={imgName} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
          <div className="px-6 flex gap-2 ">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Live
              </a>
            )}
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Code
            </a>
          </div>
          {renderTags(tags)}
        </div>
      </div>
    </>
  )
}
