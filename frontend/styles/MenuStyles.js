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
  width: 35%;
  background: #f1f1f1;
  padding: 2rem;
  overflow-y: scroll;
  position: relative;
`;