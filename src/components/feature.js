import React, { useState } from "react"
import Modal from "./Modal"
import "./feature.css"
function Feature(props) {
  const { title, content, links } = props.feature
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState()
  const handleChange = link => {
<<<<<<< HEAD
    console.log("hi")
=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
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
<<<<<<< HEAD
              <div onClick={handleChange.bind(this, link)}>{link.name}</div>
=======
              <button onClick={handleChange.bind(this, link)} href="#">
                {link.name}
              </button>
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
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
