import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import projectsStyles from "./projects.module.scss"
import SEO from "../components/seo"
import ProjectList from "../components/projects/projectList"

const projects = () => {
  const variants = {
    contentHide: {
      x: -100,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.1,
      },
    },
    contentShow: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  }

  return (
    <div>
      <SEO title="Home" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className={projectsStyles.container}
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <ProjectList />
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default projects
