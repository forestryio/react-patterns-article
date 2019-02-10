import React, { Component } from "react";
import "./App.css";
import { HocDemo } from "./components/hoc-demo/HocDemo";
import { RenderPropsDemo } from "./components/render-props-demo/RenderPropsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HocDemo />
        <RenderPropsDemo />
      </div>
    );
  }
}

export default App;
