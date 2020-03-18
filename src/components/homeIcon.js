import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import TransitionLink from "gatsby-plugin-transition-link"

const homeIcon = ({ path }) => {
  return (
    <AnimatePresence>
      {path !== "/" && (
        <TransitionLink exit={{ length: 0.0 }} entry={{ delay: 0.0 }} to="/">
          <motion.div
            key="box-1"
            style={{
              width: "30px",
              height: "30px",
              border: "5px solid #3ea8b9",
              position: "absolute",
              top: "30px",
              left: "20px",
            }}
            initial={{ x: "-100px" }}
            animate={{ x: 0, transition: { ease: "easeOut", duration: 2 } }}
            exit={{
              x: "-100px",
              transition: { ease: "easeOut", duration: 1 },
            }}
          />

          <motion.div
            key="box-2"
            style={{
              width: "30px",
              height: "30px",
              border: "5px solid #3ea8b9",
              position: "absolute",
              top: "20px",
              left: "30px",
            }}
            initial={{ y: "-100px" }}
            animate={{ y: 0, transition: { ease: "easeOut", duration: 2 } }}
            exit={{
              x: "-100px",
              transition: { ease: "easeOut", duration: 1 },
            }}
          />
        </TransitionLink>
      )}
    </AnimatePresence>
  )
}

export default homeIcon
