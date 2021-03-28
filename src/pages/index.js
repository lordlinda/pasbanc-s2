<<<<<<< HEAD
import React, { useState } from "react"
=======
import React from "react"
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import About from "../components/About"
<<<<<<< HEAD
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
=======
import { features } from "../constants/data"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features features={features} />
    <About />
  </Layout>
)
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b

export default IndexPage
