import { useRouter } from "next/router";

// Specify Stripe secret api key here
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // Access the user session
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout onClick={() => route.push("/api/auth/logout")}>Log out</Logout>
        <div>
        <h2>Order History</h2>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <h1>Order Number: {order.id}</h1>
                <h2>{formatMoney(order.amount)}</h2>
              </div>
              <div>
                <h1>Receipt Email {order.receipt_email}</h1>
              </div>
            </Order>
          ))}
        </div>
      </div>
    )
  );
}

const Logout = styled.button`
  padding: .5rem 1rem;
  margin: 1rem 0;
  background-color: #424242;
  color: #fff;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
`;

const Order = styled.div`
  background: white;
  margin-bottom: 2rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
    color: var(--secondary);
  }
`;
