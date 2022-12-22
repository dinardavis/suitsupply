import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: .5rem;
  padding: 0 2rem 2rem;
  @media screen and (max-width: 1100px) {
    padding: 0rem;
    grid-gap: 0;
    grid-template-columns: 1fr;
  }
`;
