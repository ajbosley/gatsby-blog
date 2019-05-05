import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = function (e) {
        this.setState({ isVisible: false });
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="nav-main">
                        <a href="/" className="large-screen">
                            <h1>Aaron Bosley</h1>
                        </a>
                        <a href="/" className="small-screen">
                            <h1 style={{ fontSize: "24px" }}>A.Bosley</h1>
                        </a>
                    </div>
                    <div className="nav-item-container">
                        <a className="nav-item large-screen" href="#contact">Contact</a>
                        <a className="nav-item large-screen" href="./blog">Blog</a>
                        <a className="nav-item large-screen" href="./resume">Resume</a>
                        <div className="nav-item small-screen" onClick={() => { this.setState((prevState) => ({ isVisible: !prevState.isVisible })) }}>
                            <i className="fa fa-bars fa-2x"></i></div>
                    </div>
                </div >
                {this.state.isVisible &&
                    <div className="nav-side-container small-screen">
                        <div className="nav-side-opacity" onClick={() => { this.setState((prevState) => ({ isVisible: !prevState.isVisible })) }}></div>
                        <div className="nav-side-content-container">
                            <div className="nav-side-content">
                                <a className="side-item" href="#contact">Contact</a>
                                <a className="side-item" href="/blog">Blog</a>
                                <a className="side-item" href="/resume">Resume</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
