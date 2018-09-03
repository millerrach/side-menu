import React, { Component } from "react";
import closeBtn from "../images/close.svg";

class Sidebar extends Component {
  render() {
    let open = this.props.open;
    return (
      <div className={`Sidebar ${open ? "openSidebar" : "closeSidebar"}`}>
        <img
          onClick={this.props.toggleOpen}
          src={closeBtn}
          alt="closeBtn"
          className="closeBtn"
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
