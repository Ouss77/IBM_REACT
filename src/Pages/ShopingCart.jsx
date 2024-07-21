import React from 'react';
import './ShopingCart.css';
import { useCart } from '../CartContext/CartContext';
import Header from '../Components/Header';

function ShopingCart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrement = (id) => {
    updateQuantity(id, -1);
  };

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

  return (
    <>
    <Header />
        <div className="cart-container">
      <h1>Shopping Cart</h1>
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p className="price">{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>

  );
}

export default ShopingCart;
