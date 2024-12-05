'use client';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Product } from '../context/CartContext';
import Image from 'next/image';

type ProductCardProps = {
    product: Product;
    onAddToCart: () => void;
    onAddToWishlist: () => void;
};

const ProductCard = ({ product, onAddToCart, onAddToWishlist }: ProductCardProps) => {
    return (
        <Card className="mt-2 p-4" style={{ maxWidth: 400 }}>
            <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="w-full h-58 object-cover" />
            <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>${product.price}</Typography>
                
                <Button  onClick={onAddToCart} variant="contained" color="primary" className="mt-2  bg-slate-300">
                    Add to Cart
                </Button>
                <Button  onClick={onAddToWishlist} variant="contained" color="secondary" className="mt-2 ml-2 bg-purple-100">
                    Add to Wishlist
                </Button>

            </CardContent>
        </Card>
      
    );
};

export default ProductCard;

