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
  
  }
  
  a {
    display: block;
    width: 90%;
    padding-bottom: 0.2rem;
    margin-bottom: 0.7rem;
    font-size: .9em;
    font-weight: 300;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }

  a:hover {
    font-weight: 400;
  }
`;