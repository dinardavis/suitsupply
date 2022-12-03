import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItem, NavStyles } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyles>
      <Link href={'/'}>SuitSupply</Link>
      <NavItem>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItem>
      {showCart && <Cart />}
    </NavStyles>
  )
 
}