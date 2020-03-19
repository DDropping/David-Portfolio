import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"
import { Row, Col, Container } from "react-bootstrap"

import projectsStyles from "./projects.module.scss"
import SEO from "../components/seo"

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
              projects{" "}
              <Container>
                <Row>
                  <Col
                    style={{ backgroundColor: "red" }}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                  >
                    projects
                  </Col>
                  <Col
                    style={{ backgroundColor: "blue" }}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                  >
                    images
                  </Col>
                </Row>
              </Container>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default projects
