import React from "react"
import NavBar from "./NavBar";

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <NavBar />
        <main className='main-container'>
          {children}
        </main>
        <footer style={{ marginTop: "30px", textAlign: 'center', padding: '20px', backgroundColor: "var(--dark-gy)", color: "var(--hover-txt)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "20px" }}>
            <a href="mailto:info@ajbosley.co.uk">
              <div id="contact" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <i className="fa fa-envelope fa-3x"></i>&nbsp;&nbsp;
              <span style={{ fontSize: "18px" }}>- info@ajbosley.co.uk</span>
              </div>
            </a>
          </div>
          <span>

          </span>
        </footer>
      </div>
    )
  }
}

export default Layout
