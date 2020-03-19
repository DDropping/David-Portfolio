import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import homeNavStyles from "./HomeNav.module.scss"

const HomeNav = () => {
  const pages = [
    { title: "Projects", delay: 0.15 },
    { title: "About", delay: 0.3 },
    { title: "Contact", delay: 0.45 },
  ]
  return (
    <motion.ul className={homeNavStyles.ul}>
      {pages.map(page => {
        return (
          <motion.li
            className={homeNavStyles.li}
            key={page.title}
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.75, transition: { duration: 0.1 } }}
            transition={{ delay: page.delay }}
          >
            <TransitionLink
              className={homeNavStyles.link}
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
