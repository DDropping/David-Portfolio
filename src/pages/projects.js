import React, { useState, Fragment } from "react"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import projectsStyles from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const projects = data.dataJson.projects
  const [imgSelector, setImageSelector] = useState("BoardRack")

  console.log(projects)

  const variants = {
    listInitial: {
      x: "100px",
      opacity: 0,
    },
    listShow: {
      x: 0,
      opacity: 1,
    },
    listHide: {
      x: "100px",
      opacity: 0,
    },
    imgInitial: {
      x: "-100px",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    imgShow: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    imgHide: {
      x: "100px",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div>
      <SEO title="Home" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div className={projectsStyles.container}>
              <div className={projectsStyles.projectList}>
                {projects.map(project => {
                  return (
                    <motion.div
                      onClick={() => {
                        setImageSelector(project.title)
                      }}
                      variants={variants}
                      initial={"listInitial"}
                      animate={
                        ["entering", "entered"].includes(transitionStatus)
                          ? "listShow"
                          : "listHide"
                      }
                      className={projectsStyles.projectListItem}
                    >
                      <h2
                        className={
                          imgSelector === project.title
                            ? projectsStyles.titleActive
                            : projectsStyles.title
                        }
                      >
                        {project.title}
                      </h2>
                      {project.description}
                      <Image
                        className={projectsStyles.projectImageSmallScreen}
                        fluid={project.image.childImageSharp.fluid}
                      />
                      <div
                        className={
                          projectsStyles.projectTechnologiesSmallScreen
                        }
                      >
                        <strong>Technologies Used:</strong>{" "}
                        {project.technologies.map(item => {
                          return item
                        })}
                        <br />
                        <strong>APIs/Services:</strong>{" "}
                        {project.services.map(item => {
                          return item
                        })}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <AnimatePresence>
                {projects.map(project => {
                  return (
                    <Fragment key={project.title}>
                      {imgSelector === project.title && (
                        <motion.div
                          className={projectsStyles.projectImageContainer}
                          key={"boardrack"}
                          variants={variants}
                          initial={"imgInitial"}
                          animate={
                            ["entering", "entered"].includes(transitionStatus)
                              ? "imgShow"
                              : "imgHide"
                          }
                          exit={"imgHide"}
                          transition={{ ease: "easeOut" }}
                        >
                          <div className={projectsStyles.projectImage}>
                            <Image
                              style={{
                                maxWidth: "100%",
                                width: "100%",
                                display: "inline-block",
                              }}
                              fluid={project.image.childImageSharp.fluid}
                            />
                          </div>

                          <div className={projectsStyles.technology}>
                            <strong>Technologies Used:</strong> React, Redux,
                            Node, Express, MongoDB, JWT, SASS/SCSS
                            <br /> <br />
                            <strong>APIs/Services:</strong> Developer.Here,
                            IPStack, AWS, DigitalOcean
                          </div>
                        </motion.div>
                      )}
                    </Fragment>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export const query = graphql`
  query {
    dataJson {
      projects {
        title
        description
        technologies
        services
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Projects
