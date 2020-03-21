import React, { useState } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

import projectsStyles from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = () => {
  const [imgSelector, setImageSelector] = useState("boardrack")
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "project-portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      boardrack: file(relativePath: { eq: "project-boardrack.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      sfsurent: file(relativePath: { eq: "project-sfsurent.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

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
                <motion.div
                  onClick={() => {
                    setImageSelector("boardrack")
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
                      imgSelector === "boardrack"
                        ? projectsStyles.titleActive
                        : projectsStyles.title
                    }
                  >
                    BoardRack
                  </h2>
                  Classified advertisement platform for buying and selling new
                  and used surfboards
                  <Img
                    className={projectsStyles.projectImageSmallScreen}
                    fluid={data.boardrack.childImageSharp.fluid}
                  />
                  <div
                    className={projectsStyles.projectTechnologiesSmallScreen}
                  >
                    <strong>Technologies Used:</strong> React, Redux, Node,
                    Express, MongoDB, JWT, SASS/SCSS
                    <br />
                    <strong>APIs/Services:</strong> Developer.Here, IPStack,
                    AWS, DigitalOcean
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => {
                    setImageSelector("portfolio")
                  }}
                  variants={variants}
                  initial={"listInitial"}
                  animate={
                    ["entering", "entered"].includes(transitionStatus)
                      ? "listShow"
                      : "listHide"
                  }
                  transition={{ delay: 0.15 }}
                  className={projectsStyles.projectListItem}
                >
                  <h2
                    className={
                      imgSelector === "portfolio"
                        ? projectsStyles.titleActive
                        : projectsStyles.title
                    }
                  >
                    Portfolio
                  </h2>
                  Personal portfolio to showcase my current and previous
                  projects
                  <Img
                    className={projectsStyles.projectImageSmallScreen}
                    fluid={data.portfolio.childImageSharp.fluid}
                  />
                  <div
                    className={projectsStyles.projectTechnologiesSmallScreen}
                  >
                    <strong>Technologies Used:</strong> Gatsby, React,
                    React-Bootstrap, Framer-Motion, SCSS, GraphQL
                    <br />
                    <strong>APIs/Services:</strong> Netlify
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => {
                    setImageSelector("sfsurent")
                  }}
                  variants={variants}
                  initial={"listInitial"}
                  animate={
                    ["entering", "entered"].includes(transitionStatus)
                      ? "listShow"
                      : "listHide"
                  }
                  transition={{ delay: 0.3 }}
                  className={projectsStyles.projectListItem}
                >
                  <h2
                    className={
                      imgSelector === "sfsurent"
                        ? projectsStyles.titleActive
                        : projectsStyles.title
                    }
                  >
                    SFSU Rent
                  </h2>
                  Classified advertisement platform for students to find housing
                  in the SF Bay Area
                  <Img
                    className={projectsStyles.projectImageSmallScreen}
                    fluid={data.sfsurent.childImageSharp.fluid}
                  />
                  <div
                    className={projectsStyles.projectTechnologiesSmallScreen}
                  >
                    <strong>Technologies Used:</strong> Node, MySQL, HTML5, CSS3
                    <br />
                    <strong>APIs/Services:</strong>
                    AWS, Google Maps
                  </div>
                </motion.div>
              </div>

              <AnimatePresence>
                {imgSelector === "boardrack" && (
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
                      <Img
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          display: "inline-block",
                        }}
                        fluid={data.boardrack.childImageSharp.fluid}
                      />
                    </div>

                    <div className={projectsStyles.technology}>
                      <strong>Technologies Used:</strong> React, Redux, Node,
                      Express, MongoDB, JWT, SASS/SCSS
                      <br /> <br />
                      <strong>APIs/Services:</strong> Developer.Here, IPStack,
                      AWS, DigitalOcean
                    </div>
                  </motion.div>
                )}

                {imgSelector === "portfolio" && (
                  <motion.div
                    key={"portfolio"}
                    variants={variants}
                    initial={"imgInitial"}
                    animate={
                      ["entering", "entered"].includes(transitionStatus)
                        ? "imgShow"
                        : "imgHide"
                    }
                    exit={"imgHide"}
                    transition={{ ease: "easeOut" }}
                    className={projectsStyles.projectImageContainer}
                  >
                    <div className={projectsStyles.projectImage}>
                      <Img
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          display: "inline-block",
                        }}
                        fluid={data.portfolio.childImageSharp.fluid}
                      />
                    </div>
                    <div className={projectsStyles.technology}>
                      <strong>Technologies Used:</strong> Gatsby, React,
                      React-Bootstrap, Framer-Motion, SCSS, GraphQL
                      <br />
                      <br />
                      <strong>APIs/Services:</strong> Netlify
                    </div>
                  </motion.div>
                )}

                {imgSelector === "sfsurent" && (
                  <motion.div
                    key={"sfsurent"}
                    variants={variants}
                    initial={"imgInitial"}
                    animate={
                      ["entering", "entered"].includes(transitionStatus)
                        ? "imgShow"
                        : "imgHide"
                    }
                    exit={"imgHide"}
                    transition={{ ease: "easeOut" }}
                    className={projectsStyles.projectImageContainer}
                  >
                    <div className={projectsStyles.projectImage}>
                      <Img
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          display: "inline-block",
                        }}
                        fluid={data.sfsurent.childImageSharp.fluid}
                      />
                    </div>
                    <div className={projectsStyles.technology}>
                      <strong>Technologies Used:</strong> Node, MySQL, HTML5,
                      CSS3
                      <br /> <br />
                      <strong>APIs/Services:</strong>
                      AWS, Google Maps
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default Projects
