import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { saveFeatures } from "../constants/data"

const Save = () => (
  <Layout>
    <SEO title="Save" />
    <div className="header-content">
      <h1>save</h1>
<<<<<<< HEAD
=======

>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?
      </p>
      <button>Get Started</button>
    </div>
    <Features features={saveFeatures} />
  </Layout>
)

export default Save
