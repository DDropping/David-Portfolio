import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"

import SEO from "../components/seo"

const index = () => {
  return (
    <div>
      <SEO title="Home" />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <div>
              <div>David Dropping</div>
              <div>FullStack engineer</div>
            </div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default index
