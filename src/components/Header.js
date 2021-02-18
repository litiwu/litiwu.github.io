import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import logo from "../images/logo1.svg"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <img src={logo} alt="lisa's logo"/>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
