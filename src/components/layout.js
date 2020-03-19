import React from "react"
import PropTypes from "prop-types"

import "./newLayout.css"
import Navbar from "./navbar"
import LineTop from "./background/lineTop"
import LineBottom from "./background/lineBottom"
import LineRight from "./background/lineRight"
import LineLeft from "./background/lineLeft"

const Layout = ({ children, path }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-10",
        }}
      >
        <LineTop path={path} />
        <LineBottom path={path} />
        <LineRight path={path} />
        <LineLeft path={path} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar path={path} />
        </div>
        <div style={{ MaxWidth: "100%", height: "100%" }}>{children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
