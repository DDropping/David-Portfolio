import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import HomeNavStyles from "./HomeNav.module.scss"

const HomeNav = () => {
  return (
    <div className={HomeNavStyles.container}>
      <motion.ul style={{ display: "inline-block", margin: "auto" }}>
        <motion.li
          className={HomeNavStyles.homeNavLi}
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <TransitionLink
            className={HomeNavStyles.link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.25 }}
            to={"/projects"}
          >
            Projects
          </TransitionLink>
        </motion.li>

        <motion.li
          className={HomeNavStyles.homeNavLi}
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TransitionLink
            className={HomeNavStyles.link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.25 }}
            to={"/about"}
          >
            About
          </TransitionLink>
        </motion.li>

        <motion.li
          className={HomeNavStyles.homeNavLi}
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <TransitionLink
            className={HomeNavStyles.link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.25 }}
            to={"/contact"}
          >
            Contact
          </TransitionLink>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default HomeNav
