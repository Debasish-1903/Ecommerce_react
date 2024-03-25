import React from "react";
import { useState } from "react";

import Header from "./components/Header/Header";
import Products from "./components/Products/products";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setShowCart(true);

  const closeCart = () => setShowCart(false);

  const handleAddToCart = (productId, productName, productImage) => {
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({   //pusing without changing the original array
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quantity: 1,
    // });

    //using alternatively useing spread operator in one line  ,pass by values(makes copy)no changes in original array

    const ProductInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    if (ProductInCartIndex === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };

      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[ProductInCartIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <Header openCart={openCart} />
      <Products onAddToCart={handleAddToCart} />
      <Cart showCart={showCart} closeCart={closeCart} cartItems={cartItems} />
    </div>
  );
}

export default App;
