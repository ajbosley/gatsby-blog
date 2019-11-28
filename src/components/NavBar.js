import React, { Component } from "react";
import { Link } from "gatsby";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = function(e) {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="nav-main">
            <Link to="/" className="large-screen">
              <h1>Aaron Bosley</h1>
            </Link>
            <Link to="/" className="small-screen">
              <h1 style={{ fontSize: "24px" }}>A.Bosley</h1>
            </Link>
          </div>
          <div className="nav-item-container">
            <Link className="nav-item large-screen" to="#contact">
              Contact
            </Link>
            <Link className="nav-item large-screen" to="/blog">
              Blog
            </Link>
            <Link className="nav-item large-screen" to="/resume">
              Resume
            </Link>
            <div
              className="nav-item small-screen"
              onClick={() => {
                this.setState(prevState => ({
                  isVisible: !prevState.isVisible
                }));
              }}
            >
              <i className="fa fa-bars fa-2x"></i>
            </div>
          </div>
        </div>
        {this.state.isVisible && (
          <div className="nav-side-container small-screen">
            <div
              className="nav-side-opacity"
              onClick={() => {
                this.setState(prevState => ({
                  isVisible: !prevState.isVisible
                }));
              }}
            ></div>
            <div className="nav-side-content-container">
              <div className="nav-side-content">
                <Link className="side-item" to="#contact">
                  Contact
                </Link>
                <Link className="side-item" to="/blog">
                  Blog
                </Link>
                <Link className="side-item" to="/resume">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
