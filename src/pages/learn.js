import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { learnFeatures } from "../constants/data"

const Learn = () => (
  <Layout>
    <SEO title="Learn" />

    <Features features={learnFeatures} />
  </Layout>
)

export default Learn
