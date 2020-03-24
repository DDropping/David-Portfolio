import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>David Dropping</title>
      </Helmet>
      <SEO title="Resume" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <div style={{ maxWidth: "1200px" }}>
                <Img
                  style={{ maxWidth: "700px", margin: "auto" }}
                  fluid={data.resume.childImageSharp.fluid}
                />
              </div>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default Resume
