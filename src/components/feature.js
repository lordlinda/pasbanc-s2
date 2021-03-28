import React, { useState } from "react"
import Modal from "./Modal"
import "./feature.css"
function Feature(props) {
  const { title, content, links } = props.feature
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState()
  const handleChange = link => {
    console.log("hi")
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
              <div onClick={handleChange.bind(this, link)}>{link.name}</div>
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
