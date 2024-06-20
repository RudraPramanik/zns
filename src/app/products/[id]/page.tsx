'use client';

import axios from 'axios';
import { useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductDetails from '../../../components/ProductDetails';

interface Product {
  id: number;
  title: string;
  short_desc: string;
  images: { image: string }[];
  selling_price: number;
  variants: {
    code: string;
    size: string;
    color: string;
    stock: number;
  }[];
}

const ProductPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id || searchParams.get('id'); // Adjust based on how you handle the dynamic segments
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const { data } = await axios.get(
          `https://api.zonesparks.org/products/${id}/`
        );
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return <ProductDetails product={product} />;
};

export default ProductPage;
