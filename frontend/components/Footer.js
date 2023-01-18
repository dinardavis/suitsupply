import styled from "styled-components";

export default function Footer() {


  return (
    <FooterContainer>
      <span>SuitSupply Copyright &copy; 2023</span>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  padding: 0.4rem;
  text-align: center;
  font-size: 0.7rem;
  background-color: #000;
  color: #fff;
`