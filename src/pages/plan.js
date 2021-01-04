import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { planFeatures } from "../constants/data"
const Plan = () => (
  <Layout>
    <SEO title="Plan" />
    <div class="header-content">
      <h1>PLAN</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?
      </p>
      <button>Get Started</button>
    </div>
    <Features features={planFeatures} />
  </Layout>
)

export default Plan
