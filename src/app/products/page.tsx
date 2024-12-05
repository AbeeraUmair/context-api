'use client';

import React, { useState, useMemo } from 'react';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Filters from '../../components/Filters';
import SortOptions from '../../components/SortOptions';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [categories, setCategories] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      )
      .filter((product) => categories === 'All' || product.category === categories)
      .sort((a, b) =>
        sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
      );
  }, [priceRange, categories, sortBy]);

  return (
    <div className="p-4">
      <Filters setPriceRange={setPriceRange} setCategories={setCategories} />
      <SortOptions onSortChange={setSortBy} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
              onAddToWishlist={() => addToWishlist(product)}
            />
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
