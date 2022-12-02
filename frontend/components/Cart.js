import { useStateContext } from '../lib/context';
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, CartQuantity} from '../styles/CartStyles';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

export default function Cart() {
  const { cartItems } = useStateContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>Your cart is empty</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >=1 && (
          cartItems.map((item) => {
            return (
              <Card>
                <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                  <CartQuantity>
                    <span>Qty:</span>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                    <h3>{item.quantity}</h3>
                    <button>
                      <AiFillPlusCircle />
                    </button>
                  </CartQuantity>
                </CardInfo>
              </Card>
            )
          })
        )}      
      </CartStyle>
    </CartWrapper>
  )
}