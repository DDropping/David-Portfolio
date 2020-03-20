import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"

import projectStyles from "../../pages/projects"

const projectList = () => {
  const projects = [
    {
      title: "BoardRack",
      description:
        "Classified advertisement platform for buying and selling new and used surfboards",
      image: "",
      stack: ["React", "Redux", "MongoDB", "Node", "Express", "Ant-Design"],
      delay: 0.15,
    },
    {
      title: "Portfolio",
      description:
        "Classified advertisement platform for buying and selling new and used surfboards",
      image: "",
      stack: ["React", "Redux", "MongoDB", "Node", "Express", "Ant-Design"],
      delay: 0.3,
    },
    {
      title: "GatorRent",
      description:
        "Classified advertisement platform for buying and selling new and used surfboards",
      image: "",
      stack: ["React", "Redux", "MongoDB", "Node", "Express", "Ant-Design"],
      delay: 0.45,
    },
  ]

  return (
    <div className={projectStyles.projectListContainer}>
      <div className={projectStyles.projectList}>projects</div>
    </div>
  )
}

export default projectList
