import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineRight = ({ path }) => {
  return (
    <AnimatePresence>
      {(path == "/projects/" || path == "/contact/") && (
        <motion.div
          style={{
            width: "100px",
            height: "100%",
            borderLeft: "5px solid #3ea8b94a",
            position: "absolute",
            right: 0,
          }}
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { ease: "easeOut", duration: 5 } }}
          exit={{
            y: "100vh",
            transition: { ease: "easeOut", duration: 5 },
          }}
        />
      )}
    </AnimatePresence>
  )
}

export default lineRight
