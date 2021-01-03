import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { features, planFeatures } from "../constants/data"
const Plan = () => (
  <Layout>
    <SEO title="Plan" />

    <Features features={planFeatures} />
  </Layout>
)

export default Plan
