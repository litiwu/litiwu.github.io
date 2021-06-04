import React from "react"

import Layout from "../components/layout"
// Components
import ProjHeader from "../components/ProjHeader"

const IllustrationPage = () => (
    <Layout>
     <ProjHeader 
        projName="REMINISCENT"
        projDes="AN EXPLORATION OF THE NOSTALGIAS OF OF CHILDHOOD AND THE LOSS OF INNOCENCE.">
      </ProjHeader>
      <img src="../images/waking.jpg" alt="Tucked In" className="center"></img>
      <p>Tucked In</p>
      <img src="../images/dreaming.JPG" alt="Dreaming" className="center"></img>
      <p>Dreaming</p>
      <img src="../images/beam.JPG" alt="Beam" className="center"></img>
      <p>Beam</p>
      <img src="../images/iris_window.JPG" alt="Iris" className="center"></img>
      <img src="../images/drivers_licence.JPG" alt="Lisa" className="center"></img>
      <p>Reflection</p>
      <img src="../images/noodle_shop.jpg" alt="The Noodle Shop" className="center"></img>
      <p>The Noodle Shop</p>
      <img src="../images/growing_up.JPG" alt="Growing Up" className="center"></img>
      <p>Growing Up</p>
      <img src="../images/home.jpg" alt="Home" className="center"></img>
      <p>Home</p>
      <img src="../images/monsters.JPG" alt="Monsters" className="center"></img>
      <p>The Monsters</p>
      <img src="../images/asleep.jpg" alt="Back Home" className="center"></img>
      <p>Back Home</p>
    </Layout>
  )
  
  export default IllustrationPage