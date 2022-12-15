import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  width: 100vw;
  padding: 0 3rem;
  font-size: 1rem;
  a {
    position: absolute;
    right: calc(50% - 158px/2);
    font-size: 1.7rem;
    font-weight: 500;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 400;
  }
  svg {
    font-size: 1rem;
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

export const Burger = styled.div`
  div {
    padding: 1px 15px;
    background-color: #424242;
    margin-bottom: 7px;
    border-radius: .5rem;
  }
`;
