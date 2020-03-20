import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineBottom = ({ path }) => {
  return (
    <AnimatePresence>
      {(path === "/projects/" || path === "/about/") && (
        <div>
          <motion.div
            key="lineBottom"
            style={{
              width: "100%",
              height: "80px",
              borderTop: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              bottom: 0,
            }}
            initial={{ x: "100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              x: "-100vw",
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
          />
          <motion.div
            key="lineBottom2"
            style={{
              width: "100%",
              height: "90px",
              borderTop: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              bottom: 0,
            }}
            initial={{ x: "100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.random() * (7 - 4 + 1) + 4,
              },
            }}
            exit={{
              x: "-100vw",
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

export default lineBottom
