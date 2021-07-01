import React, { useState } from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const body = encode({
      "form-name": form.getAttribute("name"),
      name,
      email,
      message: msg,
    })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => {
        setName("")
        setMsg("")
        setEmail("")
        alert("Thank you for reaching out")
      })
      .catch(error => alert(error))
  }
  return (
    <div className="container">
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-12 py-16 mx-auto bg-gray-100  rounded-lg shadow-lg">
        <div className="flex flex-col justify-start text-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about it!
            </h2>
            <div className="text-gray-700 mt-8">
              whatever you're thinking about.
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="#"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
              required={true}
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required={true}
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              name="message"
              className="w-full h-64 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              onChange={e => setMsg(e.target.value)}
              value={msg}
              required={true}
            ></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
