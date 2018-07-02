import * as React from "react";

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
// tslint:disable-next-line:no-implicit-dependencies
// import { action } from "@storybook/addon-actions";
// tslint:disable-next-line:no-implicit-dependencies
import { linkTo } from "@storybook/addon-links";
// tslint:disable-next-line
import { Welcome } from "@storybook/react/demo";

import Home from '../ui/Home/Home';

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("App")} />
));

storiesOf("Home", module)
  .add("with graph", () => (
    <Home  />
  ))
  // .add("with some emoji", () => (
  //   <App  />
  // ));

