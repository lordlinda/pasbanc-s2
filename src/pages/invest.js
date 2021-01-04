import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { investFeatures } from "../constants/data"
const Invest = () => (
  <Layout>
    <SEO title="Invest" />

    <Features features={investFeatures} />
  </Layout>
)

export default Invest
