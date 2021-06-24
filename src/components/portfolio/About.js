import React from "react"

const Aboutme = () => {
  return (
    <>
      <div className="container">
        <h1>Baaziz Oussama</h1>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="max-w-xl text-justify mx-auto">
              <p>Hello. My name is Oussama. I am a Web Developer.</p>
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
                Companies moving to a digital business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
