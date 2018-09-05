import React, { Component } from "react";
import closeBtn from "../images/close.svg";

class Sidebar extends Component {
  render() {
    let open = this.props.open;
    return (
      <div
        className={`Sidebar ${open ? "openSidebar" : "closeSidebar"}`}
        style={{ height: document.body.scrollHeight }}
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
