import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    const cartItem = {
      ...item,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      // Add other properties you need
      cartId: Date.now().toString(),
    };
    setCartItems(prev => [...prev, cartItem]);
  };

  const removeFromCart = id => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
