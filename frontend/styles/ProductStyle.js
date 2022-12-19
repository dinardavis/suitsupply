import styled from "styled-components";

export const ProductStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  img {
    width: 100%;
    cursor: pointer;
    border: .5px solid #ccc
  }
  h2 {
    font-size: .9rem;
    margin-bottom: .2rem;
  }
  h3 {
    font-size: .9rem;
    font-weight: 300;
  }
`;
