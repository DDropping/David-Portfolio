import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

import "./newLayout.css"
import Navbar from "./navbar"
import HomeIcon from "./homeIcon"
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

      <Navbar path={path} />
      <HomeIcon path={path} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
