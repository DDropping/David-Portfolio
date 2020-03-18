import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const navbar = () => {
  return (
    <div>
      <ul>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <TransitionLink
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to="/projects"
          >
            Projects
          </TransitionLink>
        </li>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <TransitionLink
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to="/about"
          >
            About
          </TransitionLink>
        </li>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <TransitionLink
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to="/contact"
          >
            Contact
          </TransitionLink>
        </li>
      </ul>
    </div>
  )
}

export default navbar
