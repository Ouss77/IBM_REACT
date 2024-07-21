
import React, {  useState } from 'react';
import './Product.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import { useCart } from '../CartContext/CartContext';

const products = [
  { id: 1, title: 'Product 1', image: image1, price: '$10', description: 'Short desc 1' },
  { id: 2, title: 'Product 2', image: image2, price: '$20', description: 'Short desc 2' },
  { id: 3, title: 'Product 3', image: image3, price: '$30', description: 'Short desc 3' },
  { id: 4, title: 'Product 4', image: image4, price: '$40', description: 'Short desc 4' },
  { id: 5, title: 'Product 5', image: image5, price: '$50', description: 'Short desc 5' },
  { id: 6, title: 'Product 6', image: image6, price: '$60', description: 'Short desc 6' },
];

function Products() {
  const { addToCart, removeFromCart } = useCart();
  const [added, setAdded] = useState({});

  const handleAddRemove = (item) => {
    setAdded(prevAdded => {
      const isAdded = prevAdded[item.id];
      if (!isAdded) {
        console.log('Adding to cart:', item); // Debugging line
        addToCart(item); // Ensure this is called only once
      } else {
        console.log('Removing from cart:', item.id); // Debugging line
        removeFromCart(item.id);
      }
      return { ...prevAdded, [item.id]: !isAdded };
    });
  };
  

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <button
            onClick={() => handleAddRemove(product)}
            className={added[product.id] ? 'added' : ''}
          >
            {added[product.id] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}


export default Products;