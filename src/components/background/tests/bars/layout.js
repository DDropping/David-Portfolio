import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

import "./newLayout.css"
import Navbar from "./navbar"
import LineTop from "./background/lineTop"
import LineBottom from "./background/lineBottom"
import LineRight from "./background/lineRight"
import LineLeft from "./background/lineLeft"
import Bar from "./background/bar"

const Layout = ({ children, path }) => {
  const bars = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ]

  var position = Math.floor(Math.random() * (90 - 75 + 1) + 75)

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
        {bars.map(bar => {
          var direction = Math.random() * Math.floor(2)
          var nextPosition =
            direction <= 1
              ? position + Math.floor(Math.random() * (5 - 1 + 1) + 1)
              : position - Math.floor(Math.random() * (5 - 1 + 1) + 1)
          position = nextPosition
          return <Bar position={position} bar={bar} totalBars={bars.length} />
        })}

        {/* <LineTop path={path} />
        <LineBottom path={path} />
        <LineRight path={path} />
        <LineLeft path={path} /> */}
      </div>

      <Navbar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
