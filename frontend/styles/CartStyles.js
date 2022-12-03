import styled from 'styled-components';

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartClose = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.1rem;
  z-index: 101;
  font-weight: 500;
  color: #494949;
  border: 1px solid #494949;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const CartStyle = styled.div`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 3rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  overflow: hidden;
  background: #fff;
  padding: 0.8rem;
  margin: 1rem 0rem;
  img {
    width: 50px;
    height: 100%;
    margin-right: 2rem;
  }
  h3 {
    font-size: .9rem;
    margin-bottom: .4rem;
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`

export const EmptyStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
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

export const CartQuantity = styled.div`
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    margin: 1rem 0rem;

    button {
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;

      font-size: 1.2rem;
      margin: .2rem;
    }

    h3 {
      margin: 0;
    }

    p {
      width: 1rem;
      text-align: center;
    }

    span {
      color: var(--secondary);
    }

    svg {
      color: #494949
    }
`;


