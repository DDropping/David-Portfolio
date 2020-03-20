import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { Row, Col } from "react-bootstrap"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import contactStyles from "./contact.module.scss"
import SEO from "../components/seo"

const contact = () => {
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
      <SEO title="Contact" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className={contactStyles.container}
              variants={variants}
              initial={"contentHide"}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "contentShow"
                  : "contentHide"
              }
            >
              <AnimatePresence>
                <motion.a
                  href="http://github.com/DDropping"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.15 } }}
                  exit={{ opacity: 0 }}
                >
                  <FaGithubSquare className={contactStyles.icon} />
                </motion.a>
                <motion.a
                  href="http://www.linkedin.com/in/ddropping/"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                  exit={{ opacity: 0 }}
                >
                  <FaLinkedin className={contactStyles.icon} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/david.dropping"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.45 } }}
                  exit={{ opacity: 0 }}
                >
                  <FaFacebookSquare className={contactStyles.icon} />
                </motion.a>
                <motion.a
                  href="mailto:ddropping@gmail.com"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.6 } }}
                  exit={{ opacity: 0 }}
                >
                  <FaEnvelopeSquare className={contactStyles.icon} />
                </motion.a>
              </AnimatePresence>
              <h2>
                For the fastest response, email at:
                <br />
                <a
                  style={{ color: "#3ea8b9" }}
                  href="mailto:ddropping@gmail.com"
                >
                  ddropping@gmail.com
                </a>
              </h2>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default contact
