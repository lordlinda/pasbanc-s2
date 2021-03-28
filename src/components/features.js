import React from "react"
import "./features.css"
import Feature from "./feature"
<<<<<<< HEAD

=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
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
