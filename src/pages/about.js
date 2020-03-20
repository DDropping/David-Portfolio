import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import aboutStyles from "./about.module.scss"
import SEO from "../components/seo"

const about = () => {
  return (
    <div>
      <SEO title="Home" />
      <div>about</div>
    </div>
  )
}

export default about
