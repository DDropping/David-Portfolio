import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import aboutStyles from "./about.module.scss"
import SEO from "../components/seo"
import Profile from "../components/images/profile"

const about = () => {
  const variants = {
    contentHide: {
      y: 100,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.1,
      },
    },
    contentShow: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  }

  return (
    <div>
      <SEO title="About" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className={aboutStyles.container}
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <div>about</div>
              <Profile />
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default about
