import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { supplyFeatures } from "../constants/data"

const Supply = () => (
  <Layout>
    <SEO title="Supply" />
<<<<<<< HEAD
    <div className="header-content">
      <h1>Supply</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?
      </p>
      <button>Get Started</button>
    </div>
=======

>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
    <Features features={supplyFeatures} />
  </Layout>
)

export default Supply
