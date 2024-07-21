import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.length; // Count the number of items

  return (
    <nav>
      <div className='logo'>
        <h2>Paradise Nursery</h2>
        <h3>Where Green Meets Serenity</h3>
      </div>
      <div className='title'>
        <h2>Plants</h2>
      </div>
      <div className="icon">
        <Link to='/shoping'>
          <FontAwesomeIcon icon={faShoppingCart} />
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
