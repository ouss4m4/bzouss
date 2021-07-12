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
import fireLogo from "../../images/firebase-logo.svg"

export const Tools = () => {
  return (
    <div className="container">
      <h1 className="text-center font-serif">Tools</h1>
      <p className="text-center max-w-xl mx-auto">
        Frameworks and languages should be considered as tools. these are the
        tools i tend to opt for. but not limited to{" "}
      </p>

      <h5 className="text-center  py-3">Front End</h5>
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={tsLogo}
            alt="tsLogo"
          />
          <span className="block pt-4">Typescript</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={angularLogo}
            alt="angularLogo"
          />

          <span className="block pt-4">Angular</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={reactLogo}
            alt="reactLogo"
          />
          <span className="block pt-4">React</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={gatsbyLogo}
            alt="gatsbyLogo"
          />
          <span className="block pt-4">Gatsby</span>
        </div>
      </div>
      <h5 className="text-center py-3">Back End</h5>

      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={nodeLogo}
            alt="nodeLogo"
          />
          <span className="block pt-4">Node</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={expressLogo}
            alt="expressLogo"
          />
          <span className="block pt-4">Express</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={mongodbLogo}
            alt="mongodbLogo"
          />
          <span className="block pt-4">MongoDB</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={tsLogo}
            alt="tsLogo"
          />
          <span className="block pt-4">Typescript</span>
        </div>
      </div>
      <h5 className="text-center py-3">Deployment</h5>
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={fireLogo}
            alt="fireLogo"
          />
          <span className="block pt-4">Firebase</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={netlifyLogo}
            alt="netlifyLogo"
          />
          <span className="block pt-4">Netlify</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={awsLogo}
            alt="awsLogo"
          />
          <span className="block pt-4">AWS</span>
        </div>
      </div>
      <h5 className="text-center py-3">Mobile App</h5>

      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={nativescriptLogo}
            alt="nativescriptLogo"
          />
          <span className="block pt-4">NativeScript</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={flutterLogo}
            alt="flutterLogo"
          />
          <span className="block pt-4">Flutter</span>
        </div>
      </div>
      <h5 className="text-center py-3">More Tools</h5>

      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={electronLogo}
            alt="electronLogo"
          />
          <span className="block pt-4">Electron</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={vsLogo}
            alt="vsLogo"
          />
          <span className="block pt-4">VSCode</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={webpackLogo}
            alt="webpackLogo"
          />
          <span className="block pt-4">WebPack</span>
        </div>
        <div className="text-center w-20 md:w-32">
          <img
            className="w-20 h-20 md:w-32 md:h-32"
            src={gitLogo}
            alt="gitLogo"
          />
          <span className="block pt-4">Git</span>
        </div>
      </div>
    </div>
  )
}
