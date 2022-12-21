import { useStateContext } from "../lib/context";
import { MenuWrapper, MenuStyles } from "../styles/MenuStyles";
import { GrClose } from "react-icons/gr";

export default function Menu() {
  const { setShowMenu } = useStateContext();

  return (
    <MenuWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowMenu(false)}
    >
      <MenuStyles
        layout
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        exit={{ x: "-50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setShowMenu(false)}><GrClose /></div>
        <li>New Arrivals</li>
        <li>Suits</li>
        <li>Shoes</li>
        <li>Ties</li>
      </MenuStyles>
    </MenuWrapper>
  );
}