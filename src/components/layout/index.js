import React from "react"
import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.min.css"
import "./newLayout.css"
import Navbar from "../navigation/navbar"
import LineTop from "../background/lineTop"
import LineBottom from "../background/lineBottom"
import LineRight from "../background/lineRight"
import LineLeft from "../background/lineLeft"

const Layout = ({ children, path }) => {
  return (
    <div>
      <div className="background-lines">
        <LineTop path={path} />
        <LineBottom path={path} />
        <LineRight path={path} />
        <LineLeft path={path} />
      </div>

      <div className="layout-container">
        <Navbar path={path} />
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
