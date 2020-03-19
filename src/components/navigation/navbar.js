import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion, AnimatePresence } from "framer-motion"

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
      <AnimatePresence>
        {path !== "/" && (
          <ul className={navbarStyles.navbarul}>
            {pages.map(page => {
              return (
                <motion.li
                  className={navbarStyles.navbarli}
                  key={page.title + page.delay}
                  initial={{ opacity: 0, y: "-100px" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100px" }}
                  transition={{ delay: page.delay }}
                >
                  <TransitionLink
                    className={
                      path === `/${page.title.toLowerCase()}/`
                        ? navbarStyles.linkActive
                        : navbarStyles.link
                    }
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                    to={`/${page.title.toLowerCase()}/`}
                  >
                    {page.title}
                  </TransitionLink>
                </motion.li>
              )
            })}
          </ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default navbar
