import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./header.css"

export default function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1> BZ Ouss</h1>
      </div>

      <div className="links">
        <Link to={"/blog"} itemProp="url">
          <span itemProp="headline">Blog</span>
        </Link>
        <Link to={"/"} itemProp="url">
          <span itemProp="headline">About Me</span>
        </Link>

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              🔆
            </label>
          )}
        </ThemeToggler>
      </div>
    </div>
  )
}
