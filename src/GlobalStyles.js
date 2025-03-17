import styled, { createGlobalStyle } from "styled-components"

//root & global styling
const GlobalStyle = createGlobalStyle`
  *, body, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter Tight", sans-serif;
    max-width: 100%;
}
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
export const MiddleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3% 1%;
  background-color: #F8F8F8;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
`;

export const MiddleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 3%
`;

export const BottomContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  padding: 5%;
`;

export const Subsection = styled.section`
  display: flex;
  gap: 1rem;
`;

export const Header = styled.p`
  color: ${(props) => (props.color ? props.color : "#161723")};
  font-size: 40px;
  font-weight: 600;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
        font-size: 22px;
        line-height: 20px;
        font-weight: 500;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

export const SubHeader = styled.p`
  color: ${(props) => (props.color ? props.color : "#161723")};
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  display: flex;

  @media screen and (max-width: 960px) {
        font-size: 20px;
        line-height: 20px;
        font-weight: 400;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

export const NormalFont = styled.p`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: 16px;
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "400")};
  line-height: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Button = styled.button`
  width: 462px;
  height: 48px;
  border-radius: 6px;
  background: #EE6F4B;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: 0.4s;
  border: none;

  &:hover{
    cursor: pointer;
    background: #8a2509;
  }
`;

export default GlobalStyle