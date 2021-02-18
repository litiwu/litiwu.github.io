import React from "react"

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
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
        </a>
      </div>
    </div>
  )
}

export default Card
