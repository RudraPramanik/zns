import { useState } from 'react';
import { useAppDispatch } from '../store';
import { addToCart } from '../store/slices/cartSlice';

interface Variant {
  code: string;
  size: string;
  color: string;
  stock: number;
}

interface Product {
  id: number;
  title: string;
  short_desc: string;
  images: { image: string }[];
  selling_price: number;
  variants: Variant[];
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ ...selectedVariant, product_id: product.id, quantity })
    );
  };

  return (
    <div>
      <img src={product.images[0].image} alt={product.title} />
      <h1 className="text-2xl">{product.title}</h1>
      <p>{product.short_desc}</p>
      <p>${product.selling_price}</p>
      <div>
        <label>Size:</label>
        <select
          value={selectedVariant.size}
          onChange={(e) =>
            setSelectedVariant({ ...selectedVariant, size: e.target.value })
          }
        >
          {product.variants.map((variant) => (
            <option key={variant.code} value={variant.size}>
              {variant.size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select
          value={selectedVariant.color}
          onChange={(e) =>
            setSelectedVariant({ ...selectedVariant, color: e.target.value })
          }
        >
          {product.variants.map((variant) => (
            <option key={variant.code} value={variant.color}>
              {variant.color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max={selectedVariant.stock}
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white p-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
