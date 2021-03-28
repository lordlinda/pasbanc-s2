import React from "react"
import { Link } from "gatsby"
<<<<<<< HEAD
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
=======
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
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
    url: "/invest/",
  },
]

const tempLinks = data.map(link => {
  return (
<<<<<<< HEAD
    <li key={link.id} className="page__link">
=======
    <li key={link.id}>
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
<<<<<<< HEAD
  return <ul>{tempLinks}</ul>
=======
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
}
