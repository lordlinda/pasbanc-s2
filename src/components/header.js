import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import PageLinks from "../constants/links"
import { FaAlignJustify } from "react-icons/fa"
import { Link } from "gatsby"
import "./header.css"
const Header = ({ siteTitle, toggleSidebar }) => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
  }, [])

  return (
    <nav className={`header ${show && "header__shadow"}`}>
      <div className="header__center">
        <p>
          <Link to="/">
            <span className="header__logoSectionOne">pas</span>
            <span className="header__logoSectionTwo">banc</span>
          </Link>
        </p>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignJustify></FaAlignJustify>
        </button>

        <PageLinks styleClass="header__links"></PageLinks>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
