import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {Link} from "gatsby"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
          </div>
          <div className="links-wrapper">
            <button onClick={() => goHomePage("#project")}>Projects</button>
            <button onClick={() => goHomePage("#about")}>About</button>
            <button onClick={() => goHomePage("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function goHomePage(p){
  p = "/" + p;
  window.location.href=p;
}



export default Navbar
