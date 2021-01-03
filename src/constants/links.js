import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 2,
    text: "plan",
    url: "/plan/",
  },
  {
    id: 3,
    text: "save",
    url: "/save/",
  },
  {
    id: 4,
    text: "supply",
    url: "/supply/",
  },
  {
    id: 5,
    text: "learn",
    url: "/learn/",
  },
  {
    id: 6,
    text: "invest",
    url: "/invest/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
