import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import PageLinks from "../constants/links"
import { FaAlignJustify } from "react-icons/fa"
import { Link } from "gatsby"
import "./header.css"
<<<<<<< HEAD

=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
const Header = ({ siteTitle, toggleSidebar }) => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
<<<<<<< HEAD
      if (window.scrollY > 80) {
=======
      if (window.scrollY > 100) {
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
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
<<<<<<< HEAD
        <div className="header__links">
          <PageLinks></PageLinks>
          <a className="header__login" href="/">
            Login
          </a>
          <a className="header__signup" href="/">
            Signup
          </a>
        </div>
=======

        <PageLinks styleClass="header__links"></PageLinks>
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
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
