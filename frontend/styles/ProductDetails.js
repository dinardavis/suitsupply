import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
 
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    min-height: 80vh;
    padding: 8rem 0rem;
    img {
      width: 100%;
      padding: 1rem 3rem;
      margin-right: 0;
    }
  }
`;

export const BackBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.8rem;
  padding: .2rem;
  font-weight: 400;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 50%;
    left: 1rem;
  }
`;

export const ProductImage = styled.img`
    width: 45%;
    margin-right: 3rem;  
`

export const ProductInfo = styled.div`
  width: 30%;
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
    padding: 0 3rem;
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
  width: 100%;
  background: var(--primary);
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: .3rem;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;


