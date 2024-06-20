'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList';
import ProductFilter from '../../components/ProductFilter';

interface Product {
  id: number;
  title: string;
  images: { thumb: string }[];
  selling_price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://api.zonesparks.org/products/', {
        params: filters,
      });
      setProducts(data.products);
    };
    fetchProducts();
  }, [filters]);

  return (
    <div>
      <ProductFilter onFilter={setFilters} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
