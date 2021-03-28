import React from "react"
import "./features.css"
import Feature from "./feature"

function Features({ features }) {
  return (
    <div className="features">
      {features.map(feature => (
        <Feature feature={feature} key={feature.title} />
      ))}
    </div>
  )
}

export default Features
