import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import navbarStyles from "./navbar.module.scss"

const navbar = ({ path }) => {
  return (
    <div className={navbarStyles.container}>
      <motion.ul>
        <motion.li
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.15 }}
          className={navbarStyles.link}
        >
          <TransitionLink
            className={navbarStyles.link}
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to={"/projects"}
          >
            Projects
          </TransitionLink>
        </motion.li>

        <motion.li
          className={navbarStyles.link}
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TransitionLink
            className={navbarStyles.link}
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to={"/about"}
          >
            About
          </TransitionLink>
        </motion.li>

        <motion.li
          className={navbarStyles.link}
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <TransitionLink
            className={navbarStyles.link}
            exit={{ length: 0.0 }}
            entry={{ delay: 0.0 }}
            to={"/contact"}
          >
            Contact
          </TransitionLink>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default navbar
