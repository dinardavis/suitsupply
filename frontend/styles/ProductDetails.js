import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    img {
      width: 100%;
      margin-right: 0;
    }
  }
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.8rem;
  padding: .2rem;
  font-weight: 400;
  cursor: pointer;
`;

export const ProductImage = styled.img`
    width: 50%;
    margin-right: 2rem;  
`

export const ProductInfo = styled.div`
  width: 40%;
  p {
    margin-bottom: .5rem;
  }
  button {
    font-size: 1.2rem;
    font-weight: medium;
    padding: 0.8rem 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 32rem 2rem 4rem;
    margin-top: 3rem;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 12rem 2rem 4rem;
    margin-top: 3rem;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 4rem 2rem 4rem;
    margin-top: 3rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
    margin: 0;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const AddToCart = styled.button`
  width: 80%;
  background: var(--primary);
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: .3rem;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;


