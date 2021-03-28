import React from "react"
import { FaTimes } from "react-icons/fa"
import "./sidebar.css"
import Drawer from "@material-ui/core/Drawer"
import { data } from "../constants/links"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Link from "@material-ui/core/Link"

import ListItem from "@material-ui/core/ListItem"
import { IconButton } from "@material-ui/core"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside>
      <Drawer variant="persistent" anchor="right" open={isOpen}>
        <Divider />
        <List>
          <ListItem>
            <IconButton onClick={toggleSidebar}>
              <FaTimes />
            </IconButton>
          </ListItem>
          {data.map((link, index) => (
            <ListItem button key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </ListItem>
          ))}
          <ListItem>Signup</ListItem>
          <ListItem>Login</ListItem>
        </List>
      </Drawer>
    </aside>
  )
}

export default Sidebar
