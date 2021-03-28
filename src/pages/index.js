import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import About from "../components/About"
import Modal from "../components/Modal"

import { features } from "../constants/data"
const IndexPage = () => {
  const [isModalOpen, setModal] = useState(true)

  return (
    <Layout>
      <SEO title="Pasbanc" />
      <Hero />
      <Modal
        title="Thank u for checking on us"
        content="Site under construction"
        open={isModalOpen}
        handleClose={() => setModal(!isModalOpen)}
      />
      <div className="home__features">
        <Features features={features} />
      </div>

      <About />
    </Layout>
  )
}

export default IndexPage
