'use client';

import { fetchProductById, fetchRelatedProducts } from '../../../api/products';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard';

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await fetchProductById(id);
        setProduct(response);
        const related = await fetchRelatedProducts(id);
        setRelatedProducts(related.products);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="product-details">
        <h1>{product.title}</h1>
        {/* Add other product details and Add to Cart option here */}
      </div>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="product-grid">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
