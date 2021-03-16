import React from 'react'
import Layout from "../components/layout"
// Components
import ProjHeader from "../components/ProjHeader"

const PhotographyPage = () => (
    <Layout>
        <ProjHeader 
            projName="MOMENTS"
            projDes="CAPTURED MEMORIES.">
        </ProjHeader>
        
        <img src="../images/IMG_0001.JPG" alt="Way Home" class="center"></img>
      <p>Way Home</p>
      <img src="../images/IMG_0040.JPG" alt="Ritual" class="center"></img>
      <p>Ritual</p>
      <img src="../images/IMG_0050.JPG" alt="Today" class="center"></img>
      <p>Today</p>
      <img src="../images/IMG_0037.JPG" alt="Instance" class="center"></img>
      <p>Instance</p>
      <img src="../images/IMG_0044.JPG" alt="Looking For The Sugar Fairies" class="center"></img>
      <p>Looking For The Sugar Fairies</p>
      <img src="../images/abstract.JPG" alt="Abstraction" class="center"></img>
        <p>Abstraction</p>
    </Layout>
  )
  
  export default PhotographyPage