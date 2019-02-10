import React, { Component } from "react";
import "./App.css";
import { HocDemo } from "./components/hoc-demo/HocDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HocDemo />
      </div>
    );
  }
}

export default App;
