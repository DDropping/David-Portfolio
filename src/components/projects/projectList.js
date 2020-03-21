import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import projectStyles from "../../pages/projects"

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "project-portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boardrack: file(relativePath: { eq: "project-boardrack.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sfsurent: file(relativePath: { eq: "project-sfsurent.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className={projectStyles.projectListContainer}>
      <div className={projectStyles.projectList}>projects</div>
    </div>
  )
}

export default ProjectList
