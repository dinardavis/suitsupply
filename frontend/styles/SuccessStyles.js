import styled from 'styled-components';

const { motion } = require("framer-motion");

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Card = styled(motion.div)`
  background: #fff;
  border-radius: .5rem;
  padding: 2rem;
  margin-right: 3rem;
  font-size: .9rem;
  button {
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
  }
`