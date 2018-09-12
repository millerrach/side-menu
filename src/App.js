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
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    let open = this.state.open;
    return (
      <div>
        <div
          className="mainPage"
          onClick={open ? this.toggleOpen : null}
          style={open ? { opacity: 0.25 } : null}
        >
          <img
            onClick={this.toggleOpen}
            src={menuBtn}
            alt="menuBtn"
            className="menuBtn"
            style={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <div className="mainContentContainer">
            <div className="mainContent">
              <div className="title">Encapsulation</div>
              <div className="paragraph">
                The core idea in object-oriented programming is to divide
                programs into smaller pieces and make each piece responsible for
                managing its own state. This way, some knowledge about the way a
                piece of the program works can be kept local to that piece.
                Someone working on the rest of the program does not have to
                remember or even be aware of that knowledge. Whenever these
                local details change, only the code directly around it needs to
                be updated. Different pieces of such a program interact with
                each other through interfaces, limited sets of functions or
                bindings that provide useful functionality at a more abstract
                level, hiding their precise implementation. Such program pieces
                are modeled using objects. Their interface consists of a
                specific set of methods and properties. Properties that are part
                of the interface are called public. The others, which outside
                code should not be touching, are called private. Many languages
                provide a way to distinguish public and private properties and
                prevent outside code from accessing the private ones altogether.
                JavaScript, once again taking the minimalist approach, does
                not—not yet at least. There is work underway to add this to the
                language. Even though the language doesn’t have this distinction
                built in, JavaScript programmers are successfully using this
                idea. Typically, the available interface is described in
                documentation or comments. It is also common to put an
                underscore (_) character at the start of property names to
                indicate that those properties are private. Separating interface
                from implementation is a great idea. It is usually called
                encapsulation.
              </div>
            </div>
          </div>
        </div>
        <Sidebar open={open} toggleOpen={this.toggleOpen} />
      </div>
    );
  }
}

export default App;
