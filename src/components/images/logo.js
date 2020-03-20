import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_noBase64
          }
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div style={{ maxWidth: "1200px" }}>
      <Img
        style={{ maxWidth: "700px", margin: "auto" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Logo
