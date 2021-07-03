import React from "react"
import FluidIMG from "../../images/FluidIMG"

const Aboutme = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center m-0 p-0 md:pt-8">Baaziz Oussama</h1>
        <p className="m-0 p-0 text-md text-center"> Software Developer</p>
        <div className="p-10">
          <div>
            <div className="max-w-xl text-center mx-auto">
              <p>Hello. My name is Oussama. I am a.</p>
              <p>
                With a background in Control and Automation Engineering. My
                journey in programing begin with a real world{" "}
                <b>traffic light system</b> executed by a PLC{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Programmable_logic_controller"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Programmable Logic Controller).
                </a>
              </p>
              <p>
                My childhood love for computers and working with
                MicroControllers nourished my passion for Computer programming
                further more. Now i develop websites and applications that help
                companies move to a digital business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
