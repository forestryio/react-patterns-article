import React, { Component } from "react";
import "./App.css";
import { HocDemo } from "./components/hoc-demo";
import { RenderPropsDemo } from "./components/render-props-demo";
import { HooksDemo } from "./components/hooks-demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOCs</h1>
        <HocDemo />
        <h1>Render Props</h1>
        <RenderPropsDemo />
        <h1>Hooks</h1>
        <HooksDemo />
      </div>
    );
  }
}

export default App;
