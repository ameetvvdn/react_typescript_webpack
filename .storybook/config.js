// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);

import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
} 

configure(loadStories, module);