import React from "react"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function About() {
  const [value, setValue] = React.useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <SEO title="About" />
      <div className="tabs">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="What sets Pasbanc apart" wrapped />
          <Tab label="Vision & Mission" wrapped />
          <Tab label="Pasbanc values" wrapped />
        </Tabs>
        <TabPanel value={value} index={0}>
          what sets pasbanc account content here
        </TabPanel>
        <TabPanel value={value} index={1}>
          vision and mission content here
        </TabPanel>
        <TabPanel value={value} index={2}>
          pasbanc values here
        </TabPanel>
      </div>
    </Layout>
  )
}

export default About
