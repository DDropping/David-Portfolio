import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineLeft = ({ path }) => {
  return (
    <AnimatePresence>
      {(path === "/" || path === "/about/") && (
        <div>
          <motion.div
            key="lineLeft"
            style={{
              width: "80px",
              height: "100%",
              borderRight: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              left: 0,
            }}
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              y: "-100vh",
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
          />
          <motion.div
            key="lineLeft2"
            style={{
              width: "90px",
              height: "100%",
              borderRight: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              left: 0,
            }}
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              y: "-100vh",
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}

export default lineLeft
