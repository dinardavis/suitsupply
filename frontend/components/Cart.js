import { CartStyle, Card, EmptyStyle, CartWrapper, CardInfo, Checkout, CartQuantity, CartClose } from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
//Import State
import { useStateContext } from "../lib/context";
import getStripe from "../lib/getStripe";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //Payment
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        layout
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CartClose onClick={() => setShowCart(false)}><GrClose /></CartClose>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1>Your cart is empty</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
                key={item.slug}
              >
                <img src={item.image.data.attributes.formats.small.url} />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <CartQuantity>
                    <span>Qty: </span>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button> 
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </CartQuantity>
                </CardInfo>
              </Card>
            );
          })}
        <Checkout layout>
          {cartItems.length >= 1 && (
            <div>
              <h4>Subtotal ${totalPrice}</h4>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          )}
        </Checkout>
      </CartStyle>
    </CartWrapper>
  );
}
