import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  img {
    width: 40%;
    margin-right: 2rem;
  }
`;

export const BackBtn = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.8rem;
  padding: .2rem;
  font-weight: 400;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  width: 30%;
  margin: 10rem 0 0 2rem;
  p {
    margin-bottom: .5rem;
  }
  button {
    font-size: 1.2rem;
    font-weight: medium;
    padding: 0.8rem 1rem;
    cursor: pointer;
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
`;
