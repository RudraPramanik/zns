import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  images: { thumb: string }[];
  selling_price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="border p-4">
    <img src={product.images[0].thumb} alt={product.title} />
    <h2 className="text-xl">{product.title}</h2>
    <p>${product.selling_price}</p>
    <Link href={`/products/${product.id}`} className="text-blue-500">
      View Details
    </Link>
  </div>
);

export default ProductCard;
