'use client'
import { useAppDispatch } from '../store';
import { removeFromCart, updateCartQuantity } from '../store/slices/cartSlice';

interface CartItemProps {
  item: {
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
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCartQuantity({ id: item.id, quantity: Number(e.target.value) })
    );
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <img
        src={item.product.images[0].thumb}
        alt={item.product.title}
        className="w-20"
      />
      <div>
        <h2>{item.product.title}</h2>
        <p>
          {item.size} / {item.color}
        </p>
        <p>${item.sub_total}</p>
      </div>
      <div>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          max={item.product.variants.stock}
        />
        <button onClick={handleRemove} className="bg-red-500 text-white p-2">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
