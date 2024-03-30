import React from "react";
import { useState } from "react";

import Header from "./components/Header/Header";
import Products from "./components/Products/products";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [showAddProduct, setShowAddProduct] = useState(false);

  const openCart = () => setShowCart(true);

  const closeCart = () => setShowCart(false);

  const openAddProduct = () => setShowAddProduct(true);

  const closeAddProduct = () => setShowAddProduct(false);

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

  const handleIncQuantity = (productId) => {
    const ProductInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems[ProductInCartIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecQuantity = (productId) => {
    const ProductInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    let quant = cartItems[ProductInCartIndex].quantity;
    let newCartItems = [...cartItems];

    if (quant === 1) {
      newCartItems = newCartItems.filter((item) => item.id !== productId);
    } else {
      newCartItems[ProductInCartIndex].quantity -= 1;
    }

    setCartItems(newCartItems);
  };

  return (
    <div>
      <Header openCart={openCart} openShowProduct={openAddProduct} />
      <Products onAddToCart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={handleIncQuantity}
        onDecQuantity={handleDecQuantity}
      />
    </div>
  );
}

export default App;
