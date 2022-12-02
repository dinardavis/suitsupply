import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItem, NavStyles } from "../styles/NavStyles";

export default function Nav() {

  return (
    <NavStyles>
      <Link href={'/'}>SuitSupply</Link>
      <NavItem>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItem>
    </NavStyles>
  )
 
}