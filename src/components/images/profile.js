import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "DavidProfile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div style={{ maxWidth: "1200px" }}>
      <Img
        style={{ maxWidth: "250px", margin: "auto", borderRadius: "10%" }}
        fluid={data.profile.childImageSharp.fluid}
      />
    </div>
  )
}

export default Profile
