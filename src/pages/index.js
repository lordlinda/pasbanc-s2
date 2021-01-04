import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import About from "../components/About"
import { features } from "../constants/data"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features features={features} />
    <About />
  </Layout>
)

export default IndexPage
