import React, { useState, Fragment } from "react"
import Image from "gatsby-image"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { FaGithub } from "react-icons/fa"
import { IoIosGlobe } from "react-icons/io"

import projectsStyles from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const projects = data.dataJson.projects
  const [imgSelector, setImageSelector] = useState("BoardRack")

  const variants = {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>David Dropping</title>
      </Helmet>
      <SEO title="Projects" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div className={projectsStyles.container}>
              <div className={projectsStyles.projectList}>
                {projects.map((project, index) => {
                  return (
                    <motion.div
                      key={project.title}
                      onClick={() => {
                        setImageSelector(project.title)
                      }}
                      initial={{ x: "-100px", opacity: 0 }}
                      animate={
                        ["entering", "entered"].includes(transitionStatus)
                          ? {
                              x: 0,
                              opacity: 1,
                              transition: {
                                delay: 0.15 * index,
                                ease: "easeOut",
                              },
                            }
                          : { x: "100px", opacity: 0 }
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
                        {project.technologies}
                        <br />
                        <strong>APIs/Services:</strong> {project.services}
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
                          {project.website !== "na" && (
                            <div className={projectsStyles.links}>
                              <a
                                className={projectsStyles.link}
                                href={project.github}
                                target="_blank"
                              >
                                <FaGithub />
                                Github Repository
                              </a>
                              <a
                                className={projectsStyles.link}
                                href={project.website}
                                target="_blank"
                              >
                                <IoIosGlobe />
                                Live Site
                              </a>
                            </div>
                          )}

                          <div className={projectsStyles.technology}>
                            <strong>Technologies Used:</strong>{" "}
                            {project.technologies}
                            <br />
                            <strong>APIs/Services:</strong> {project.services}
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
        website
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default Projects
