import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineBottom = ({ path }) => {
  return (
    <AnimatePresence>
      {(path == "/projects/" || path == "/about/") && (
        <div>
          <motion.div
            style={{
              width: "100%",
              height: "100px",
              borderTop: "5px solid #3ea8b94a",
              position: "absolute",
              bottom: 0,
            }}
            initial={{ x: "100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
            exit={{
              x: "-100vw",
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
          />
          <motion.div
            style={{
              width: "100%",
              height: "90px",
              borderTop: "5px solid #3ea8b94a",
              position: "absolute",
              bottom: 0,
            }}
            initial={{ x: "100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
            exit={{
              x: "-100vw",
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}

export default lineBottom
