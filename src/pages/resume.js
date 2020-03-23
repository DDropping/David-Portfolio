import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
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
        fluid={data.resume.childImageSharp.fluid}
      />
    </div>
  )
}

export default Resume
