import React from "react"
import { Link } from "gatsby"
import "./about.css"
function About() {
  return (
    <div className="about">
      <div>
        <h4>About us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar fringilla diam, eu fringilla nisi pretium porta. Nam cursus,
          sapien sit amet dignissim auctor, arcu lorem convallis dui, eu feugiat
          metus nulla sit amet dolor. Nulla consequat sollicitudin neque eget
          varius. Duis mattis nibh eget sem tempus finibus. Vestibulum maximus
          vestibulum lectus, non facilisis nunc ultricies non.
        </p>
        <Link to="/about">Learn more</Link>
      </div>
      <div>
        <h4>Why Pasbanc</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar fringilla diam, eu fringilla nisi pretium porta. Nam cursus,
          sapien sit amet dignissim auctor, arcu lorem convallis dui, eu feugiat
          metus nulla sit amet dolor. Nulla consequat sollicitudin neque eget
          varius. Duis mattis nibh eget sem tempus finibus. Vestibulum maximus
          vestibulum lectus, non facilisis nunc ultricies non.{" "}
        </p>
      </div>
    </div>
  )
}

export default About
