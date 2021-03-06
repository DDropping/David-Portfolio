import React from "react"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import indexStyles from "./index.module.scss"
import SEO from "../components/seo"
import Logo from "../components/images/logo"
import HomeNav from "../components/navigation/HomeNav"

const variants = {
  logoHidden: {
    y: 100,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 200,
      mass: 0.1,
    },
  },
  logoShow: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
    },
  },
}

const index = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>David Dropping</title>
      </Helmet>
      <SEO title="Home" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <div className={indexStyles.container}>
              <motion.div
                className={indexStyles.logoMenuWrapper}
                variants={variants}
                initial={"logoHidden"}
                animate={
                  ["entering", "entered"].includes(transitionStatus)
                    ? "logoShow"
                    : "logoHidden"
                }
              >
                <Logo />
                <HomeNav />
              </motion.div>
            </div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default index
