import React, { useState } from "react"
import Modal from "./Modal"
import "./feature.css"
function Feature(props) {
  const { title, content, links } = props.feature
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState()
  const handleChange = link => {
    setOpen(!false)
    setModalContent(link)
  }
  return (
    <div className="feature">
      <h4>{title}</h4>
      <p>{content}</p>
      <div className="feature__overlay">
        {links.map(link => (
          <>
            <span key={link.name} className="feature__links">
              <a onClick={handleChange.bind(this, link)} href="#">
                {link.name}
              </a>
            </span>
            <Modal
              open={open}
              handleClose={() => setOpen(false)}
              content={modalContent?.modalContent}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default Feature
