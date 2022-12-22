import styled from "styled-components";

export const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  width: 100%;
  padding: 1rem 3rem;
  background-color: #efefef;
  z-index: 1;
  a {
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media screen and (max-width: 1100px) {
    padding: 1rem 2rem;
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
    font-size: .7rem;
    font-weight: 400;
  }
  svg {
    font-size: .9rem;
  }
  span {
    position: absolute;
    top: -45%;
    right: -35%;
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
  @media screen and (max-width: 1100px) {
    div {
      margin-left: 1rem;
    }
  }
`;

export const Burger = styled.div`
  div {
    padding: 1px 12px;
    background-color: #424242;
    margin-bottom: 5px;
    border-radius: .5rem;
  }
`;
