import { useRouter } from "next/router";
import Image from "next/image";
import store from "../public/store.jpg"
import { SuccessWrapper, Card } from "../styles/SuccessStyles"

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

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
  console.log(order)
  
  return (
    <SuccessWrapper>
      <Card
        animate={{opacity: 1, scale: 1}}
        initial={{opacity: 0, scale: 0.75}}
        transition={{duration: 0.75}}
      >
        <h2>Thank you for your order!</h2>
        <p>A confirmation email has been sent to</p>
        <h3>{order.customer_details.email}</h3>
        <div>
          <h3>Address</h3>
          {Object.entries(order.customer_details.address).map(([key, val]) => (
            <p key={key}>
              {key} : {val}
            </p>
          ))}     
        </div>
        <div>
          <h3>Products</h3>
          {order.line_items.data.map((item) => (
            <div key={item.id}>
              <p>Product: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.unit_amount / 100}</p>
            </div>
          ))}
        </div>
        <button onClick={() => route.push('/')}>Continue Shopping</button>
       
      </Card>
      <Image 
        src={store} 
        alt="SuitSupply flagship store" 
        width={500}
      />
    </SuccessWrapper>
  );
}