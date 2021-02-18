import React from "react"
import { Link } from "gatsby"


const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" + imgUrl +
          ")",
      }}
    >
      <div 
        className="content"
        style={{
          backgroundSize: 250
        }}
      >
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
         <Link to={projectLink}
          className="btn">
            explore
          </Link>
     
      </div>
    </div>
  )
}

export default Card
