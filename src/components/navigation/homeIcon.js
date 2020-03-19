import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import TransitionLink from "gatsby-plugin-transition-link"

const homeIcon = ({ path }) => {
  return (
    <AnimatePresence>
      {path !== "/" && (
        <TransitionLink exit={{ length: 0.5 }} entry={{ delay: 0.5 }} to="/">
          <motion.div
            style={{
              width: "33px",
              height: "33px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.75 }}
            exit={{
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <div
              style={{
                width: "25px",
                height: "25px",
                border: "4px solid #3ea8b9",
                position: "absolute",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "25px",
                border: "4px solid #3ea8b9",
                position: "absolute",
                top: "7px",
                left: "7px",
              }}
            />
          </motion.div>
        </TransitionLink>
      )}
    </AnimatePresence>
  )
}

export default homeIcon
