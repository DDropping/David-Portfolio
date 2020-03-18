import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const lineTop = ({ path }) => {
  return (
    <AnimatePresence>
      {(path == "/" || path == "/contact/") && (
        <motion.div
          key="lineTop"
          style={{
            width: "100%",
            height: "100px",
            borderBottom: "5px solid #3ea8b94a",
            position: "absolute",
            top: 0,
          }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { ease: "easeOut", duration: 5 } }}
          exit={{
            x: "100vw",
            transition: { ease: "easeOut", duration: 5 },
          }}
        />
      )}
    </AnimatePresence>
  )
}

export default lineTop
