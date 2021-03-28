/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Sidebar from "./Sidebar"
import Footer from "./footer"
import "./layout.css"
<<<<<<< HEAD
=======

>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        toggleSidebar={toggleSidebar}
      />
<<<<<<< HEAD

=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
