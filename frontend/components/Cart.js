import { useStateContext } from '../lib/context';
import { CartWrapper, CartClose, CartStyle, Card, CardInfo, EmptyStyle, CartQuantity, CheckoutButton, Cards } from '../styles/CartStyles';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

//Animation Variance 
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle 
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CartClose onClick={() => setShowCart(false)}>X</CartClose>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Your cart is empty</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >=1 && (
            cartItems.map((item) => {
              return (
                <Card 
                  layout
                  variants={card}
                  key={item.slug}
                >
                  <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                  <CardInfo>
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                    <CartQuantity>
                      <span>Qty:</span>
                      <button onClick={() => onRemove(item)}>
                        <AiFillMinusCircle />
                      </button>
                      <h3>{item.quantity}</h3>
                      <button onClick={() => onAdd(item, 1)}>
                        <AiFillPlusCircle />
                      </button>
                    </CartQuantity>
                  </CardInfo>
                </Card>
              );
            })
          )}   
        </Cards>
        {cartItems.length >= 1 && (
          <CheckoutButton layout>
            <h3>Subtotal: ${totalPrice}</h3>
            <button>Checkout</button>
          </CheckoutButton>
        )}   
      </CartStyle>
    </CartWrapper>
  )
}