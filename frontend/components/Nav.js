import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Menu from "./Menu";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
const { AnimatePresence, motion } = require("framer-motion");
import User from "./User";

export default function Nav() {
  const { showMenu, setShowMenu, showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <NavStyles>
      <div onClick={() => setShowMenu(true)}>X</div>
      <AnimatePresence>{showMenu && <Menu />}</AnimatePresence>
      <Link href="/">SuitSupply</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
