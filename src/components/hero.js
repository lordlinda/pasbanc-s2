import React from "react"
import { Link } from "gatsby"
import "./hero.css"
const Hero = () => {
  return (
    <header className="hero">
      <div>
        <h1>
          The best way to create <br />
          and manage wealth
        </h1>
        <Link to="/" className="hero__button">
          Get started
        </Link>
      </div>
    </header>
  )
}

export default Hero
