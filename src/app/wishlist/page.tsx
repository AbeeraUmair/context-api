'use client';

import { useEffect } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemoveItem = (productId: number) => {
    removeFromWishlist(productId);
  };

  useEffect(() => {
    if (wishlist.length === 0) {
      alert('Your wishlist is empty!');
    }
  }, [wishlist]);

  return (
    <div className="p-4">
      <Typography variant="h4" className="mb-4">Your Wishlist</Typography>
      {wishlist.length === 0 ? (
        <Typography>Your wishlist is empty!</Typography>
      ) : (
        wishlist.map((product) => (
          <Card key={product.id} className="mb-4">
            <CardContent>
              <div className="flex items-center">
                <Image
                  width={200}
                  height={200}
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex-grow">
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1">${product.price}</Typography>
                </div>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
      <Link href="/products" className="mt-4 inline-block">
        <Button variant="contained" color="primary">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
