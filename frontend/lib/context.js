import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);

  //Increase product quantity 
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Increase product quantity 
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  //Add Product to Cart 
  const onAdd = (product, quantity) => {
    const exist = cartItems.find(item => item.slug === product.slug);
    if(exist) {
      setCartItems(cartItems.map((item) => 
        item.slug === product.slug ? 
        { ...exist, quantity: exist.quantity + quantity} : 
        item)
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove Product
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if(exist.quantity === 1) {
      setCartItems(cartItems.filter(item => item.slug !== product.slug))
    } else {
      setCartItems(cartItems.map(item => item.slug === product.slug ? 
        {...exist, quantity: exist.quantity - 1} :
        item
        )
      );
    }
  };

  return (
    <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd, onRemove}}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);