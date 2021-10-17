import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";
import Blog from "./Blog";

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        {/* <img src={reactLogo.default} height="480" /> */}
        <Blog />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
