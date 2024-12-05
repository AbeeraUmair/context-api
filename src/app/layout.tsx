import './globals.css';
import { Roboto } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import Header from '@/components/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'E-commerce App',
  description: 'A simple e-commerce app with cart and wishlist',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <WishlistProvider>
        <CartProvider>
        <Header/>
          {children}
        </CartProvider>
        </WishlistProvider>
        </body>
    </html>
  );
}
