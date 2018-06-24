import * as React from "react";

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
// tslint:disable-next-line:no-implicit-dependencies
// import { action } from "@storybook/addon-actions";
// tslint:disable-next-line:no-implicit-dependencies
import { linkTo } from "@storybook/addon-links";
// tslint:disable-next-line
import { Welcome } from "@storybook/react/demo";

import App from "../App";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("App")} />
));

storiesOf("App", module)
  .add("with text", () => (
    <App  />
  ))
  .add("with some emoji", () => (
    <App  />
  ));
// addDecorator(App);

// storiesOf('App', module).add('default', () =>
//     <App />
// );