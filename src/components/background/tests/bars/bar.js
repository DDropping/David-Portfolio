import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const bar = ({ position, bar, totalBars }) => {
  console.log(bar + " " + totalBars + " " + position)
  return (
    <motion.div
      style={{
        width: "calc((100% / " + totalBars + ")",
        border: "1px solid white",
        height: "100vh",
        backgroundColor: "whitesmoke",
        position: "absolute",
        bottom: 0,
        left: "calc(100vw / " + totalBars + "*" + bar + ")",
      }}
      initial={{ y: "100vh" }}
      animate={{
        y: position + "vh",
        transition: {
          ease: "easeOut",
          duration: 5,
        },
      }}
    />
  )
}

export default bar
