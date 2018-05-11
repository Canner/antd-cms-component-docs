import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
const req = require.context('../components', true, /\.stories\.js$/)

const wrapperStyle = {
  backgroundColor: "transparent",
  backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .2) 25%, rgba(255, 255, 255, .2) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .2) 75%, rgba(255, 255, 255, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .2) 25%, rgba(255, 255, 255, .2) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .2) 75%, rgba(255, 255, 255, .2) 76%, transparent 77%, transparent)",
  height: "100%",
  minHeight: "100vh",
  backgroundSize: "50px 50px",
  padding: "20px"
}

const contentStyle = {
  textAlign: "left",
  padding: "25px",
  boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
  marginBottom: "30px",
  backgroundColor: "#FFF",
  borderRadius: "5px"
}

const CenterDecorator = (storyFn) => (
  <div style={{
    backgroundImage: "linear-gradient(#CCC, #282828)"
  }}>
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        { storyFn() }
      </div>
    </div>
  </div>
);

addDecorator(CenterDecorator);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);