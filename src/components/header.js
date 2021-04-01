import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import "./header.css"
import MenuIcon from "@material-ui/icons/Menu"
const Header = ({ siteTitle, toggleSidebar }) => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
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
          <MenuIcon />
        </button>
        <div className="header__links">
          <PageLinks></PageLinks>
          <a className="header__login" href="https://my.pasbanc.com/signin">
            Login
          </a>
          <a className="header__signup" href="https://my.pasbanc.com/signup">
            Signup
          </a>
        </div>
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
