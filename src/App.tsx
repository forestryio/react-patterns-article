import React, { Component } from "react";
import "./App.css";
import { HocDemo } from "./components/hoc-demo/HocDemo";
import { RenderPropsDemo } from "./components/render-props-demo/RenderPropsDemo";
import { HooksDemo } from "./components/hooks-demo/HooksDemo";

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
