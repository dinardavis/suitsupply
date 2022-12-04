import styled from 'styled-components';

export const NavStyles = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  a {
    font-size: 1.2rem;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.1rem;
  }
  span {
    position: absolute;
    top: -20%;
    right: -5%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    background: #6C8EAD;
    font-size: 0.7rem;
    color: #fff;
    border-radius: 50%;
    pointer-event: none;
  }
`;
