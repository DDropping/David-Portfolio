import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import HomeNavStyles from "./HomeNav.module.scss"

const HomeNav = () => {
  const pages = [
    { title: "Projects", delay: 0.15 },
    { title: "About", delay: 0.3 },
    { title: "Contact", delay: 0.45 },
  ]
  return (
    <motion.ul style={{ display: "inline-block" }}>
      {pages.map(page => {
        return (
          <motion.li
            key={page.title}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: page.delay }}
          >
            <TransitionLink
              className={HomeNavStyles.link}
              exit={{ length: 0.5 }}
              entry={{ delay: 0.25 }}
              to={`/${page.title.toLowerCase()}/`}
            >
              {page.title}
            </TransitionLink>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default HomeNav
