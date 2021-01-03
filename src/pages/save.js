import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import { saveFeatures } from "../constants/data"

const Save = () => (
  <Layout>
    <SEO title="Save" />

    <Features features={saveFeatures} />
  </Layout>
)

export default Save
