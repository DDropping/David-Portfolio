import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import contactStyles from "./contact.module.scss"
import SEO from "../components/seo"

const contact = () => {
  return (
    <div>
      <SEO title="Contact" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div>
              <div>contact</div>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default contact
