import React, { Component } from "react";
import close from "../images/close.svg";

class Sidebar extends Component {
  render() {
    let open = this.props.open;
    return (
      <div className={`Sidebar ${open ? "openSidebar" : "closeSidebar"}`}>
        <img
          onClick={this.props.toggleOpen}
          src={close}
          alt="close"
          className="close"
        />
        <div className="linksContainer">
        <div className="links">
        <div>Oats</div>
        <div>Berries</div>
        <div>Coconut Milk</div>
        <div>Chia Seeds</div>
        </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
