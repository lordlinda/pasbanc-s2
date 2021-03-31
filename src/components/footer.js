import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <h5>Pasbanc</h5>
          <p>
            <a data-toggle="modal" href="#features">
              Features
            </a>
          </p>

          <p>
            <a data-toggle="modal" href="#aboutus">
              About us
            </a>
          </p>

          <p>
            <a data-toggle="modal" href="#exampleModalLong">
              Good phos
            </a>
          </p>

          <p>
            <a data-toggle="modal" href="#faqs">
              FAQS
            </a>
          </p>

          <p>
            <a data-toggle="modal" href="#testimonies">
              Testimonies
            </a>
          </p>

          <p>
            <a data-toggle="modal" href="#media">
              Media
            </a>
          </p>
        </div>

        <div>
          <h5>Products</h5>
          <p>
            <a href="#/">Security</a>
          </p>
          <p>
            <a href="#/">Terms</a>
          </p>
          <p>
            <a href="#/">Privacy</a>
          </p>
          <p>
            <a href="#/">Legal</a>
          </p>
        </div>

        <div>
          <h5>Contact</h5>
          <p>
            <a href="#/">
              <i className="fas fa-home mr-3"></i>Uganda Makerere
            </a>
          </p>
          <p>
            <a href="#/">
              <i className="fas fa-envelope mr-3"></i> contact@pasbanc.com
            </a>
          </p>
          <p>
            <a href="#/">
              <i className="fas fa-phone mr-3"></i> +256778940049
            </a>
          </p>
        </div>

        <div>
          <h5>Follow us</h5>
        </div>
      </div>
      <div>
        <h5>&copy; COPYRIGHT</h5>
      </div>
    </footer>
  )
}

export default Footer
