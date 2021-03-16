import React from "react"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
        <div
            role="button"
            onClick={() => goHomePage("#Header")}
            className="name"
            tabIndex={0}
          >
          Home
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
