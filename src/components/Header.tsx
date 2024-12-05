'use client';
import Link from 'next/link';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-black text-white">
      <Link href="/" className="text-2xl">E-Shop</Link>
      <div className="space-x-4">
      <Link href="/products">
          <Button  className='bg-blue-200' variant="contained">Products</Button>
        </Link>
        <Link href="/cart">
          <Button className='bg-blue-200' variant="contained">Cart</Button>
        </Link>
        <Link href="/wishlist">
          <Button className='bg-blue-200' variant="contained">Wishlist</Button>
        </Link>
      </div>
    </header>
  );
};
export default Header;