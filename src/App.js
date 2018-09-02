import React, { Component } from "react";
import Sidebar from "./components/Sidebar.jsx";
import "./style/css/main.css";
import menuBtn from "./images/menu.svg";

class App extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    console.log('to');
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    let open = this.state.open;
    console.log(open);
    return (
      <div className="App">
        <div className="mainContent" onClick={open ? this.toggleOpen : null}>
          <img
            onClick={this.toggleOpen}
            src={menuBtn}
            alt="menuBtn"
            className="menuBtn"
            style={open ? { display: "none" } : null}
          />
        </div>
        <Sidebar open={open} toggleOpen={this.toggleOpen} />
      </div>
    );
  }
}

export default App;
