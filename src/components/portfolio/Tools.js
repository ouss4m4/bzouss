import React from "react"
import FluidIMG from "../../images/FluidIMG"

export const Tools = () => {
  return (
    <div className="container">
      <h1>Tools</h1>
      <div className="grid text-center">
        <p>FrontEnd</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <FluidIMG filename="angular-log" />
            <span>Angular</span>
          </div>
          <div className="flex-col ">
            <FluidIMG filename="react-log" />
            <span>React</span>
          </div>
          <span>Gatsby</span>
          <span>Typescript</span>
        </div>
        <p>BackEnd</p>
        <div className="flex gap-4 justify-center">
          <span>Node</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Typescript</span>
        </div>
        <p>Mobile Apps</p>
        <div className="flex gap-4 justify-center">
          <span>NativeScript</span>
          <span>Flutter</span>
        </div>
        <p>Desktop Apps</p>
        <div className="flex gap-4 justify-center">
          <span>Electron</span>
        </div>
        <p>DevOps</p>
        <div className="flex gap-4 justify-center">
          <span>Firebase</span>
          <span>Netlify</span>
          <span>Amazon</span>
        </div>
        <p>DevTools</p>
        <div className="flex gap-4 justify-center">
          <span>Git</span>
          <span>Webpack</span>
          <span>Rsync</span>
        </div>
      </div>
    </div>
  )
}
