import React from "react"
import { Link } from "gatsby"
import "./about.css"
function About() {
  return (
    <div className="about">
      <div>
        <h4>About us</h4>
        <p>about us content here</p>
        <Link to="/about">Learn more</Link>
      </div>
      <div>
        <h4>Why Pasbanc</h4>
        <p>why pasbanc here</p>
      </div>
    </div>
  )
}

export default About
