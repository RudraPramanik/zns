import { useState } from 'react';

interface Filters {
  category: string;
  sub_category: string;
  brand: string;
  min_price: string;
  max_price: string;
  keyword: string;
}

const ProductFilter: React.FC<{ onFilter: (filters: Filters) => void }> = ({
  onFilter,
}) => {
  const [filters, setFilters] = useState<Filters>({
    category: '',
    sub_category: '',
    brand: '',
    min_price: '',
    max_price: '',
    keyword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        name="category"
        value={filters.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        name="sub_category"
        value={filters.sub_category}
        onChange={handleChange}
        placeholder="Sub Category"
      />
      <input
        name="brand"
        value={filters.brand}
        onChange={handleChange}
        placeholder="Brand"
      />
      <input
        name="min_price"
        value={filters.min_price}
        onChange={handleChange}
        placeholder="Min Price"
      />
      <input
        name="max_price"
        value={filters.max_price}
        onChange={handleChange}
        placeholder="Max Price"
      />
      <input
        name="keyword"
        value={filters.keyword}
        onChange={handleChange}
        placeholder="Keyword"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Filter
      </button>
    </form>
  );
};

export default ProductFilter;
