import React from 'react'
import { Header, NormalFont, Section, Container, Subsection, SubHeader, Button } from '../GlobalStyles'
import food1 from "../assets/food1.png"
import petbowl from "../assets/pet-bowl.png"
import petfood from "../assets/pet-food.png"
import pot from "../assets/pot.png"
import vet from "../assets/vet.png"
import payment from "../assets/payment.png"

const Top = () => {
  return (
    <div style={{padding: "3% 1%"}}>
      <Header>What makes us different makes them stronger</Header>

      <Section>
        <Container>
          <Subsection>
            <img src={food1} alt="food 1"/>
            <div>
              <SubHeader style={{marginBottom: "0.6rem"}}>Real Food</SubHeader>
              <NormalFont>Wholesome recipes for dogs with real meat and veggies.</NormalFont>
            </div>
          </Subsection>

          <Subsection>
            <img src={petbowl} alt="petbowl"/>
            <div>
              <SubHeader style={{marginBottom: "0.6rem"}}>Premium Ingredient</SubHeader>
              <NormalFont>Elevating pet care with unmatched safety and quality.</NormalFont>
            </div>
          </Subsection>
        </Container>

      <img src={pot} alt = "pot" style={{padding: "1.4rem"}}/>

      <Container>
        <Subsection>
            <img src={petfood} alt="petfood"/>
            <div>
              <SubHeader style={{marginBottom: "0.6rem"}}>Made Fresh</SubHeader>
              <NormalFont>We prioritize maintaining the integrity of whole foods and nutrition.</NormalFont>
            </div>
        </Subsection>

        <Subsection>
            <img src={vet} alt="vet"/>
            <div>
              <SubHeader style={{marginBottom: "0.6rem"}}>Vet Developed</SubHeader>
              <NormalFont>We raise the bar for dog nutrition, surpassing industry expectations.</NormalFont>
            </div>
        </Subsection>
      </Container>
      </Section>

      <div style={{display: "flex", alignItems: "center", flexDirection: "column", marginRight: "2rem"}}>
        <Button>Get your dog's healthy meal today!</Button>
        <div>
        <img src={payment} alt="food 1" style={{marginTop: "1rem"}}/>
        </div>
      </div>
    </div>

  )
}

export default Top