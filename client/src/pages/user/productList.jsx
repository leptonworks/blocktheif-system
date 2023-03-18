import React from 'react';
import History from './history';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1.',
    image: 'https://source.unsplash.com/random/400x400',
    category: 'Category 1',
    price: '$19.99',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2.',
    image: 'https://source.unsplash.com/random/400x400',
    category: 'Category 2',
    price: '$29.99',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <History key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;