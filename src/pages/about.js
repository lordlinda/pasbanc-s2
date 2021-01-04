import React from "react"

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
      <ul class="nav nav-tabs">
        <li class="active">
          <a data-toggle="tab" href="#home">
            What sets Pasbanc apart
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu1">
            Vision & Mission
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu2">
            Pasbanc values
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <h3>What sets pasbanc apart</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div id="menu1" class="tab-pane fade">
          <h3> Vision and mission</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div id="menu2" class="tab-pane fade">
          <h2>Values</h2>
          <ul id="values">
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
            <li>
              <a href="">value one</a>
            </li>
          </ul>
          <br />
          <div class="container">
            <h1>Value one</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis enim
            similique odio nostrum exercitationem dicta dolor accusamus quos
            ducimus commodi hic dolorum omnis architecto neque, tenetur harum
            quidem cum. Maiores?
            <a class="toolTip" href="#" data-placement="auto">
              <sup>&#91;1&#93;</sup>
              <span class="custom">
                <em>Critical</em>This is just an example of what you can do
                using a CSS tooltip, feel free to get creative and produce your
                own!
              </span>
            </a>
            ,<h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            Here are some examples of a{" "}
            <sup>
              <a class="toolTip" href="#">
                &#91;1&#93;
              </a>
            </sup>
            <span class="classic">
              This is just an example of what you can do using a CSS tooltip,
              feel free to get creative and produce your own!
            </span>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
            <h1>Value one</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              alias, neque. Iure, repellat perspiciatis consectetur. Odio
              consequuntur magnam, nemo voluptas laudantium temporibus debitis,
              explicabo! Quos non, accusamus architecto porro rerum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
