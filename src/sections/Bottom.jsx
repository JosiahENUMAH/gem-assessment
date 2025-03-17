import React from 'react'
import { Header, NormalFont, MiddleSection, BottomContainer} from '../GlobalStyles'
import dogeat from "../assets/dogeat.gif"
import rexfood from "../assets/rexfood.png"
const Bottom = () => {
  return (
    <>
      <MiddleSection style={{backgroundColor: "#FFF"}}>
        <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
          <img src={dogeat} alt = "dogeat" style={{borderRadius: "1rem"}}/>
        </div>
        <BottomContainer>
          <Header style={{marginBottom: "2rem"}}>Improve overall gastrointestinal health for better nutrient absorption</Header>

          <NormalFont>
          Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
          </NormalFont>

        </BottomContainer>   
    </MiddleSection>

    <MiddleSection style={{backgroundColor: "#FFF"}}>
      <BottomContainer>
        <Header style={{marginBottom: "2rem"}}>Prebiotics nourish the beneficial gut bacteria, supporting digestive health</Header>

        <NormalFont >
        Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
        </NormalFont>
      </BottomContainer>
      <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
          <img src={rexfood} alt = "rexfood"/>
        </div>
    </MiddleSection>
    </>
  )
}

export default Bottom