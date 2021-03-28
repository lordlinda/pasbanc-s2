import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"

function About() {
  const [value, setValue] = React.useState(2)
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
  return (
    <Layout>
      <SEO title="About" />
      <div style={{ padding: "16px" }}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          excepturi atque veritatis laborum, rerum, a obcaecati velit voluptates
          voluptas incidunt unde in, harum dicta aspernatur ipsam quasi labore!
          Tempore, sed.
        </p>

        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="What sets Pasbanc apart" />
          <Tab label="Vision and mission" />
          <Tab label="Pasbanc values" />
        </Tabs>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h3>What sets pasbanc apart</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h3> Vision and mission</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <h2>Values</h2>
          <ul id="values">
            <li>
              <a href="/#">Truth</a>
            </li>
            <li>
              <a href="/#">People</a>
            </li>
            <li>
              <a href="/#">Diligence</a>
            </li>
            <li>
              <a href="/#">Excellence</a>
            </li>
            <li>
              <a href="/#">Joy</a>
            </li>
            <li>
              <a href="/#">Humility</a>
            </li>
            <li>
              <a href="/#">Prudence</a>
            </li>
            <li>
              <a href="/#">Responsibity</a>
            </li>
            <li>
              <a href="/#">Honor</a>
            </li>
            <li>
              <a href="/#">Faithfulness</a>
            </li>
            <li>
              <a href="/#">Temperance</a>
            </li>
            <li>
              <a href="/#">Patience</a>
            </li>
            <li>
              <a href="/#">Integrity</a>
            </li>
            <li>
              <a href="/#">Team-work</a>
            </li>
            <li>
              <a href="/#">Love</a>
            </li>
          </ul>
          <br />
          <div>
            <h1>Truth</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis enim
            similique odio nostrum exercitationem dicta dolor accusamus quos
            ducimus commodi hic dolorum omnis architecto neque, tenetur harum
            quidem cum. Maiores?
            <a class="toolTip" href="#/" data-placement="auto">
              <sup>&#91;1&#93;</sup>
              <span class="custom">
                <em>Critical</em>This is just an example of what you can do
                using a CSS tooltip, feel free to get creative and produce your
                own!
              </span>
            </a>
            ,<h1>People</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Diligence</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Excellence</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Joy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Humility</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Prudence</h1>
            Here are some examples of a{" "}
            <sup>
              <a class="toolTip" href="#/">
                &#91;1&#93;
              </a>
            </sup>
            <span class="classic">
              This is just an example of what you can do using a CSS tooltip,
              feel free to get creative and produce your own!
            </span>
            <h1>Responsibity</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Honor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Faithfulness</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Temperance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Patience</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Integrity</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Team-work</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Love</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
          </div>
        </TabPanel>
      </div>
    </Layout>
  )
}

export default About
