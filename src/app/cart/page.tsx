'use client';

import { fetchCart, updateCartItem, deleteCartItem } from '../api/cart';
import { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchUserCart = async () => {
      const response = await fetchCart(1); // Replace with actual user ID
      setCart(response);
    };
    fetchUserCart();
  }, []);

  const handleQuantityChange = async (itemId, newQuantity) => {
    await updateCartItem(1, itemId, newQuantity); // Replace with actual user ID
    // Fetch updated cart
  };

  const handleRemoveItem = async (itemId) => {
    await deleteCartItem(1, itemId); // Replace with actual user ID
    // Fetch updated cart
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id} className="cart-item">
          <h2>{item.product.title}</h2>
          <p>
            Quantity:{' '}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
          </p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: {cart.grand_total}</h3>
    </div>
  );
};

export default CartPage;
