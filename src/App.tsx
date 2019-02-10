import React, { Component } from "react";
import "./App.css";
import { HocDemo } from "./components/hoc-demo";
import { RenderPropsDemo } from "./components/render-props-demo";
import { HooksDemo } from "./components/hooks-demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HocDemo />
        <RenderPropsDemo />
        <HooksDemo />
      </div>
    );
  }
}

export default App;
