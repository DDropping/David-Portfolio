import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineTop = ({ path }) => {
  return (
    <AnimatePresence>
      {(path == "/" || path == "/contact/") && (
        <div>
          <motion.div
            key="lineTop"
            style={{
              width: "100%",
              height: "100px",
              borderBottom: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              top: 0,
            }}
            initial={{ x: "-100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
            exit={{
              x: "100vw",
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
          />
          <motion.div
            key="lineTop"
            style={{
              width: "100%",
              height: "90px",
              borderBottom: "5px solid rgba(62, 168, 185, 0.1)",
              position: "absolute",
              top: 0,
            }}
            initial={{ x: "-100vw" }}
            animate={{
              x: 0,
              transition: {
                ease: "easeOut",
                duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
              },
            }}
            exit={{
              x: "100vw",
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

export default lineTop
