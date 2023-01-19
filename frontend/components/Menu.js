import { useStateContext } from "../lib/context";
import { MenuWrapper, MenuStyles } from "../styles/MenuStyles";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

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
        <Link href={"/"}><a onClick={() => setShowMenu(false)}>Home</a></Link>
        <Link href={"/suit"}><a onClick={() => setShowMenu(false)}>Suits</a></Link>
        <Link href={"/shoe"}><a onClick={() => setShowMenu(false)}>Shoes</a></Link>
        <Link href={"/tie"}><a onClick={() => setShowMenu(false)}>Ties</a></Link>
      </MenuStyles>
    </MenuWrapper>
  );
}