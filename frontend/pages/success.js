import styled from "styled-components";
import store from "../public/store.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
const { motion } = require("framer-motion");
// STRIPE_SECRET_KEY
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );

  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
        initial={{ opacity: 0, scale: 0.75 }}
      >
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} : {val}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
        <Image src={store} id="store-img" alt="success" />
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 7rem 0;
  @media screen and (max-width: 700px) {
    padding: 5rem 2rem;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: .5rem;
  padding: 4rem;
  font-size: .9rem;
  line-height: .8;
  @media screen and (max-width: 700px) {
    padding: 1rem;
    font-size: .5rem;
    line-height: 1;
  }

  h1 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  h2 {
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
  }
`;
const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  @media screen and (max-width: 700px) {
    font-size: .8rem;
    width: 90%;
    margin-right: 1rem;
  }
`;
const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 700px) {
    font-size: .8rem;
  }
`;
const InfoWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`;