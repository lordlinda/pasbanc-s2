import React from "react"
import { Link } from "gatsby"
export const data = [
  {
    id: 1,
    text: "Plan",
    url: "/plan/",
  },
  {
    id: 2,
    text: "Save",
    url: "/save/",
  },
  {
    id: 3,
    text: "Supply",
    url: "/supply/",
  },
  {
    id: 4,
    text: "Learn",
    url: "/learn/",
  },
  {
    id: 5,
    text: "Invest",
    url: "/invest/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id} className="page__link">
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul>{tempLinks}</ul>
}
