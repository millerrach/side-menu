import React, { Component } from "react";
import Sidebar from "./components/Sidebar.jsx";
import "./style/css/main.css";
import menu from "./images/menu.svg";

class App extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className="App">
        <div className="mainContent">
          <img
            onClick={this.toggleOpen}
            src={menu}
            alt="menu"
            className="menu"
            style={this.state.open ? { display: "none" } : null}
          />
        </div>
        <Sidebar open={this.state.open} toggleOpen={this.toggleOpen} />
      </div>
    );
  }
}

export default App;
