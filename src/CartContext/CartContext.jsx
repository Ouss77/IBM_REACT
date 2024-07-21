import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Check if item already exists in the cart
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => {
      const item = prevItems.find(i => i.id === id);
      if (item) {
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) {
          return prevItems.filter(i => i.id !== id);
        }
        return prevItems.map(i =>
          i.id === id ? { ...i, quantity: newQuantity } : i
        );
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
