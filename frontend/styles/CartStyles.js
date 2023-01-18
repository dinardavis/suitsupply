import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const CartStyle = styled(motion.div)`
  background: #f1f1f1;
  padding: 4rem 2rem 2rem;
  width: 27rem;
  overflow-y: scroll;
  position: relative;
`;

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0 1rem;
  font-weight: 400;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
    margin: 0 0.3rem;
  }

  span {
    color: var(--secondary);
    margin-right: 0.5rem;
  }

  svg {
    color: #494949;
  }
`;

export const CartClose = styled.div`
    position: absolute;
    top: 1rem;
    left: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    z-index: 1000;
`

export const Card = styled(motion.div)`
  display: flex;
  border-radius: 0.3rem;
  overflow: hidden;
  background: #fff;
  padding: 0.8rem 1rem;
  margin: 1rem 0rem;
  img {
    width: 4rem;
    height: 100%;
    margin-right: 1rem;
  }
  h3 {
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: .2rem;
  }
  p {
    font-weight: 500;
    font-size: .9rem;
  }
`;

export const CardInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  svg {
    font-size: 4rem;
    color: var(--secondary);
    margin-top: 0.5rem;
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 0.7rem 2rem;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    margin-top: 2rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  }
`;
