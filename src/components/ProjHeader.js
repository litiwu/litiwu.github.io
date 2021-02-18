import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"


const ProjHeader = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <hi>Illustrations</hi>
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

export default ProjHeader
