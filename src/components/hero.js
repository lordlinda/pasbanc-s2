import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "macOS-Wallpapers-06 .jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>The best way to create and manage wealth</h1>
            <Link to="/contact" className="btn">
              Get started
            </Link>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
