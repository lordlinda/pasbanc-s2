import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { investFeatures } from "../constants/data"
const Invest = () => (
  <Layout>
    <SEO title="Invest" />
    <div class="header-content">
      <h1>Invest</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?
      </p>
      <button>Get Started</button>
    </div>
    <Features features={investFeatures} />
  </Layout>
)

export default Invest
