import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../components', true, /\.stories\.js$/)

const CenterDecorator = (storyFn) => (
  <div style={{
    padding: "20px",
    backgroundColor: "#fafafa",
    minHeight: "100vh"
  }}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);