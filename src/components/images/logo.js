import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "logo.png" }) {
        id
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
        style={{ maxWidth: "600px", margin: "auto" }}
        fluid={data.image.childImageSharp.fluid}
      />
    </div>
  )
}

export default Logo
