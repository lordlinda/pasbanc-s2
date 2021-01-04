import PropTypes from "prop-types"
import React from "react"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
import "./header.css"
const Header = ({ siteTitle, toggleSidebar }) => (
  <nav className="header">
    <div className="header__center">
      <p>
        <Link to="/">
          <span className="header__logoSectionOne">pas</span>
          <span className="header__logoSectionTwo">banc</span>
        </Link>
      </p>
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <FaAlignRight></FaAlignRight>
      </button>

      <PageLinks styleClass="header__links"></PageLinks>
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
