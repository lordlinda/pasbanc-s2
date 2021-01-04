import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { learnFeatures } from "../constants/data"

const Learn = () => (
  <Layout>
    <SEO title="Learn" />
    <div class="header-content">
      <h1>Learn</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?
      </p>
      <button>Get Started</button>
    </div>
    <Features features={learnFeatures} />
  </Layout>
)

export default Learn
