import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import contactStyles from "./contact.module.scss"
import SEO from "../components/seo"

const contact = () => {
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
      <SEO title="Contact" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className={contactStyles.container}
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <div>contact</div>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default contact
