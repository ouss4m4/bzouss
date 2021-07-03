import React from "react"
import gatsbyLogo from "../../images/gatsby-logo.svg"
import reactLogo from "../../images/react-logo.svg"
import angularLogo from "../../images/angular-logo.svg"
import tsLogo from "../../images/ts-logo.svg"
import nodeLogo from "../../images/node-logo.svg"
import expressLogo from "../../images/express-logo.svg"
import mongodbLogo from "../../images/mongodb-logo.svg"
import nativescriptLogo from "../../images/nativescript-logo.svg"
import flutterLogo from "../../images/flutter-logo.svg"
import electronLogo from "../../images/electron-logo.svg"
import netlifyLogo from "../../images/netlify-logo.svg"
import awsLogo from "../../images/aws-logo.svg"
import vsLogo from "../../images/vscode-logo.svg"
import webpackLogo from "../../images/webpack-logo.svg"
import gitLogo from "../../images/git-logo.svg"

export const Tools = () => {
  return (
    <div className="container">
      <h1 className="text-center">Tools</h1>
      <div className="grid gap-y-16 gap-x-2 grid-cols-tools  place-content-center place-items-center">
        <p className="m-0">FrontEnd</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img className="w-20 h-20" src={angularLogo} />

            <span>Angular</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={reactLogo} />
            <span>React</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={gatsbyLogo} />
            <span>Gatsby</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={tsLogo} />
            <span>Typescript</span>
          </div>
        </div>
        <p className="m-0">BackEnd</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img className="w-20 h-20" src={nodeLogo} />
            <span>Node</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={expressLogo} />
            <span>Express</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={mongodbLogo} />
            <span>MongoDB</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={tsLogo} />
            <span>Typescript</span>
          </div>
        </div>
        <p className="m-0">DevOps</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img
              className="w-20 h-20"
              src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg"
            />
            <span>Firebase</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={netlifyLogo} />
            <span>Netlify</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={awsLogo} />
            <span>AWS</span>
          </div>
        </div>
        <p className="m-0">DevTools</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img className="w-20 h-20" src={gitLogo} />
            <span>Git</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={webpackLogo} />
            <span>Webpack</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={vsLogo} />
            <span>VSCODE</span>
          </div>
        </div>
        <p className="m-0">Mobile Apps</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img className="w-20 h-20" src={nativescriptLogo} />
            <span>NativeScript</span>
          </div>
          <div className="flex-col ">
            <img className="w-20 h-20" src={flutterLogo} />
            <span>Flutter</span>
          </div>
        </div>

        <p className="m-0">Desktop Apps</p>
        <div className="flex gap-4 justify-center">
          <div className="flex-col ">
            <img className="w-20 h-20" src={electronLogo} />
            <span>Electron</span>
          </div>
        </div>
      </div>
    </div>
  )
}
