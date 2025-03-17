import React from 'react'
import { Header, NormalFont, MiddleSection, MiddleContainer, Subsection, SubHeader, Button } from '../GlobalStyles'
import dog from "../assets/dog.png"
const Middle = () => {
  return (
      <MiddleSection>
        
        <MiddleContainer>
          <Header>Nutrition is the foundation for longer, healthier lives in dogs</Header>

          <NormalFont>
            Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
          </NormalFont>

          <SubHeader>Key Points:</SubHeader>
          <Subsection style={{alignItems: 'center'}}>
            <SubHeader style={{color: "#EE6F4B"}}>97%</SubHeader>
            <NormalFont>
              Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
            </NormalFont>    
          </Subsection>
          <Subsection style={{alignItems: 'center'}}>
            <SubHeader style={{color: "#EE6F4B"}}>84%</SubHeader>
            <NormalFont>
              Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
            </NormalFont>    
          </Subsection>
          <Subsection style={{alignItems: 'center'}}>
            <SubHeader style={{color: "#EE6F4B"}}>92%</SubHeader>
            <NormalFont>
              Our dog food's high protein and fat digestibility contribute to ideal stool quality.
            </NormalFont>    
          </Subsection>
          <Button style={{width: "100%"}}>Give your furry friend the gift of wholesome nutrition</Button>

        </MiddleContainer>

        <div>
          <img src={dog} alt = "pot"/>
        </div>
         
      </MiddleSection>
    
  )
}

export default Middle