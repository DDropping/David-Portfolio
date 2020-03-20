import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import aboutStyles from "./about.module.scss"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "DavidProfile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
      <SEO title="About" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className={aboutStyles.container}
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Row>
                    <Col sm={12} md={6} lg={4}>
                      <Img
                        style={{
                          maxWidth: "250px",
                          margin: "auto",
                          borderRadius: "10%",
                        }}
                        fluid={data.profile.childImageSharp.fluid}
                      />
                    </Col>
                    <Col sm={12} md={6} lg={8} className={aboutStyles.header}>
                      <h1>David Dropping</h1>
                      <h2>San Francisco, CA</h2>
                      <h5>
                        Recent Graduate from San Francisco State University with
                        a Bachelors in Computer Science
                      </h5>
                      <div>
                        <a href="http://github.com/DDropping">
                          <FaGithubSquare className={aboutStyles.icon} />
                        </a>
                        <a href="http://www.linkedin.com/in/ddropping/">
                          <FaLinkedin className={aboutStyles.icon} />
                        </a>
                        <a href="https://www.facebook.com/david.dropping">
                          <FaFacebookSquare className={aboutStyles.icon} />
                        </a>
                        <a href="mailto:ddropping@gmail.com">
                          <FaEnvelopeSquare className={aboutStyles.icon} />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <Row style={{ marginTop: "50px" }}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.15 } }}
                    exit={{ opacity: 0 }}
                  >
                    Hi, I’m David, a driven young professional looking to enter
                    the world of web design and development. I’ve spent the last
                    few years honing my skills in top web technologies
                    including:{" "}
                    <strong>
                      React, Redux, Node, SQL, MongoDB, SASS & SCSS, Bootstrap,
                      Ant Design, VS Code, GraphQL
                    </strong>
                    . You can find my full resume{" "}
                    <TransitionLink className={aboutStyles.link}>
                      <strong>here</strong>
                    </TransitionLink>
                    .
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                  >
                    {" "}
                    At my last job, I worked within a large team of customer
                    service associates and managers. I gained valuable
                    experience pertaining to{" "}
                    <strong>
                      communication, teamwork, organization, planning, and
                      meeting goals and expectations
                    </strong>
                    .
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.45 } }}
                    exit={{ opacity: 0 }}
                  >
                    {" "}
                    I’m{" "}
                    <strong>
                      hardworking, receptive and unrelenting when it comes to my
                      work and passions
                    </strong>
                    . If this sounds good to you, I’m ready to work, preferably
                    full-time. I’m open to working either local (SF Bay Area),
                    relocating anywhere in the United States, or remotely.{" "}
                    <TransitionLink className={aboutStyles.link}>
                      <strong>Reach out to me! I’d love to chat!</strong>
                    </TransitionLink>
                  </motion.p>
                </Row>
              </AnimatePresence>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default About
