import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import navbarStyles from "./navbar.module.scss"
import HomeIcon from "./homeIcon"

const navbar = ({ path }) => {
  const pages = [
    { title: "Projects", delay: 0.15 },
    { title: "About", delay: 0.3 },
    { title: "Contact", delay: 0.45 },
  ]
  return (
    <div className={navbarStyles.container}>
      <HomeIcon path={path} />
      <motion.ul className={navbarStyles.navbarul}>
        {pages.map(page => {
          return (
            <motion.li
              key={page.title + page.delay}
              initial={{ y: "-100px" }}
              animate={{ y: 0 }}
              transition={{ delay: page.delay }}
              className={navbarStyles.navbarli}
            >
              <TransitionLink
                className={navbarStyles.link}
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
    </div>
  )
}

export default navbar
