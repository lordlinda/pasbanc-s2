import PropTypes from "prop-types"
import React from "react"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
const Header = ({ siteTitle, toggleSidebar }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <p>
          <Link to="/">Pasbanc</Link>
        </p>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
