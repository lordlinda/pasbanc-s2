import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { supplyFeatures } from "../constants/data"

const Supply = () => (
  <Layout>
    <SEO title="Supply" />

    <Features features={supplyFeatures} />
  </Layout>
)

export default Supply
