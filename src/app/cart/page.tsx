'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from '../../components/CartItem';

interface Cart {
  id: number;
  items: {
    id: number;
    product: {
      id: number;
      title: string;
      images: { thumb: string }[];
      variants: { stock: number };
    };
    size: string;
    color: string;
    quantity: number;
    sub_total: number;
  }[];
  grand_total: number;
}

const CartPage = () => {
  const { data: session } = useSession();
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    if (session) {
      const fetchCart = async () => {
        const { data } = await axios.get('https://api.zonesparks.org/cart/', {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        });
        setCart(data);
      };
      fetchCart();
    }
  }, [session]);

  if (!session) return <p>Please login to view your cart.</p>;

  return (
    <div>
      {cart?.items.length ? (
        cart.items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
