import React from "react"

const Experience = () => {
  return (
    <>
      <div className="container text-black font-sans">
        <h1 className="text-center font-serif">Experience</h1>
        <p className="text-center text-xl  ">
          <b>2018 - Present :</b> Software Developer at
          <a
            href="https://pharmainvest.dz/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            {" "}
            PharmaInvest SPA{" "}
          </a>
        </p>
        <div className="max-w-xl mx-auto">
          <p className="mt-1 mb-3 text-justify">
            <span className="pl-6">My </span>role as a member of the IT
            department and lead of the developers team is to create, update and
            promote the use of digital solutions to entirely transform the
            processes of ordering and distribution. I participated and mentored
            in creating :
          </p>

          <span>
            <b className="text-lg">Internal Solutions:</b>{" "}
          </span>
          <ul className="list-disc list-inside	mt-2 ml-4 ">
            <li>
              <p className="inline">
                Web-based software (PWA) for online inventory management, order
                fulfillment and customer complaints to be used by the company
                sales and marketing departments.
              </p>
            </li>
            <li>
              <p className="inline">
                Automatic Order Printer built with Electron as a Desktop App to
                print orders awaiting fulfillment in the corresponding
                warehouses.
              </p>
            </li>
            <li>
              <p className="inline">
                Mobile App to scan and update each stage of Order fulfillment
                and tracking of warehouses supply.{" "}
              </p>
            </li>
            <li>
              <p className="inline">
                Automatic delivery/invoice printing using BarCode scanners.
              </p>
            </li>
            <li>
              <p className="inline">
                Interface to manage users accounts and access to the company
                services.
              </p>
            </li>
          </ul>
          <span>
            <b className="text-lg">External Services:</b>{" "}
          </span>
          <ul className="list-disc list-inside	mt-2 ml-4">
            <li>
              <p className="inline">
                A Public Cross Platform Mobile Application destined to final
                clients for Ordering and Tracking shipments. and check invoices.
              </p>
            </li>
            <li>
              <p className="inline">
                A Public Website in addition to the Mobile app connected
                together to ensure services availability to the clients.
              </p>
            </li>
          </ul>
          <p className="text-center text-justify">
            all of the digital solutions cited above among others had a major
            impact on the company reputation and net worth. minimizing human
            errors and collecting data allowing the IT department to scale
            faster and the company to grow bigger.
          </p>
        </div>

        <p className="text-center text-xl ">
          <b>2014 - 2016 :</b> Automation Engineer Freelancer
        </p>

        <div className="max-w-xl mx-auto">
          <p className="mb-0"></p>
          <p className="mt-1 mb-3 text-justify">
            Leveraging my Automation and Regulation knowledge combined with
            programming skills i helped young entrepreneurs kick off their
            workshops by configuring machines to work with computers and
            automate possible tasks.
          </p>

          <p className="mt-1 mb-3 text-justify">
            it was at this moment i started developing landing websites for
            small businesses. so i focused on mastering web development for the
            next 2 years.
          </p>
        </div>

        <p className="text-center text-xl mt-4  max-w-lg mx-auto">
          <b>2010 - 2013 :</b> <em>Higher Technician Diploma </em>
          <a
            href="https://www.schoolandcollegelistings.com/DZ/S%C3%A9tif/493104027438145/INSFP-S%C3%A9tif-500"
            target="_blank"
            rel="noreferrer"
          >
            INSFP 500 Sétif.
          </a>
        </p>
      </div>
    </>
  )
}

export default Experience
