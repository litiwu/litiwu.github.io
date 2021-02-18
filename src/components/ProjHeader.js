import React from "react"
import Fade from "react-reveal/Fade"


const ProjHeader = ({projName, projDes}) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{projName}</h1>
              <h2>{projDes}</h2>
            </div>
          </Fade>
      
        </div>
      </div>
    </div>
  )
}

export default ProjHeader
