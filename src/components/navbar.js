import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import navbarStyles from "./navbar.module.scss"
import HomeIcon from "./homeIcon"

const navbar = ({ path }) => {
  return (
    <div className={navbarStyles.container}>
      <HomeIcon path={path} />
      <motion.ul className={navbarStyles.navbarul}>
        <motion.li
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.15 }}
          className={navbarStyles.navbarli}
        >
          <TransitionLink
            className={navbarStyles.link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.25 }}
            to={"/projects"}
          >
            Projects
          </TransitionLink>
        </motion.li>

        <motion.li
          className={navbarStyles.navbarli}
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TransitionLink
            className={navbarStyles.link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.25 }}
            to={"/about"}
          >
            About
          </TransitionLink>
        </motion.li>

        <motion.li
          className={navbarStyles.navbarli}
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <TransitionLink
            className={navbarStyles.link}
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

export default navbar
