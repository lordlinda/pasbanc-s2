import React from "react"
import SocialLinks from "../constants/socialLinks"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Pasbanc</h4>
        <ul>
          <li>Features </li>
          <li>About us</li>
          <li>Good phos</li>
          <li>FAQS</li>
          <li>Testimonies</li>
          <li>Media</li>
        </ul>
      </div>
      <div>
        <h4>Products</h4>
        <ul>
          <li>Security</li>
          <li>Privacy</li>
          <li>Legal</li>
        </ul>
      </div>
      <div>
        <h4>contact</h4>
        <ul>
          <li>Uganda Makerere</li>
          <li>pasbanc@gmail.com</li>
          <li>+256875835</li>
        </ul>
      </div>
      <div>
        <h4>follow us</h4>
        <SocialLinks styleClass="footer__links"></SocialLinks>
      </div>
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span> Pasbanc </span> all rights reserved
      </h4>
    </footer>
  )
}

export default Footer
