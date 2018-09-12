import React, { Component } from "react";
import closeBtn from "../images/close.svg";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({ height: document.documentElement.scrollHeight });
  }
  render() {
    let open = this.props.open;
    console.log(this.state.height);
    return (
      <div
        className={`Sidebar ${open ? "openSidebar" : "closeSidebar"}`}
        style={{ height: this.state.height }}
      >
        <img
          onClick={this.props.toggleOpen}
          src={closeBtn}
          alt="closeBtn"
          className="closeBtn"
        />
        <div className="linksContainer">
          <div className="links">
            <div>Methods</div>
            <div>Prototypes</div>
            <div>Classes</div>
            <div>Maps</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
