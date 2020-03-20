import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineRight = ({ path }) => {
  return (
    <AnimatePresence>
      {(path === "/projects/" || path === "/contact/") && (
        <div>
          <motion.div
            key="lineRight"
            style={{
              width: "80px",
              height: "100%",
              borderLeft: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              right: 0,
            }}
            initial={{ y: "-100vh" }}
            animate={{
              y: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              y: "100vh",
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
          />
          <motion.div
            key="lineRight2"
            style={{
              width: "90px",
              height: "100%",
              borderLeft: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              right: 0,
            }}
            initial={{ y: "-100vh" }}
            animate={{
              y: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              y: "100vh",
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

export default lineRight
