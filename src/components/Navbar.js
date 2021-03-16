import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
        <div
            role="button"
            onClick={() => goHomePage("#project")}
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
