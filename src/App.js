import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This app is under continuous integration and deployment. Start writing
          some tests!
          <a href="https://medium.com/@Zaccc123/https-medium-com-zaccc123-continuous-integration-and-deployment-setup-for-react-app-7b5f4bd76cdd">
            Followed the instructions here
          </a>
        </p>
      </div>
    );
  }
}

export default App;
