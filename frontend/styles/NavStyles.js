import styled from "styled-components";

export const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  width: 100vw;
  padding: 1rem 3rem;
  background-color: #efefef;
  transition: all 0.5s;
  z-index: 1;

  a {
    position: absolute;
    right: calc(50% - 121px/2);
    font-size: 1.3rem;
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
    font-size: .7rem;
    font-weight: 400;
  }
  svg {
    font-size: .9rem;
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
    padding: 1px 12px;
    background-color: #424242;
    margin-bottom: 5px;
    border-radius: .5rem;
  }
`;
