import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  images: { thumb: string }[];
  selling_price: number;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => (
  <div className="grid grid-cols-3 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
