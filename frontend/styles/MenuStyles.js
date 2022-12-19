import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const MenuWrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-start;
`;

export const MenuStyles = styled(motion.div)`
  width: 22rem;
  background: #f1f1f1;
  padding: 1.2rem 3rem;
  font-size: 1.4rem;
  font-weight: 200;
  list-style: none;
  overflow-y: scroll;
  position: relative;


  div {
    position: absolute;
    right: 2rem;
    cursor: pointer;
    font-weight: 400;
  }
  
  li {
    margin-bottom: 0.7rem;
    cursor: pointer;
  }

  li:hover {
    color: #000;
  }
`;