import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query profile {
      profile: file(relativePath: { eq: "profile.png" }) {
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
    <Img
      style={{ maxWidth: "500px" }}
      fluid={data.profile.childImageSharp.fluid}
    />
  )
}

export default Profile
