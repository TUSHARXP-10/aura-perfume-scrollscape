
import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/context/ScrollContext';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useScroll();
  const themeClass = `theme${currentTheme}`;

  return (
    <div className={`product-card group ${themeClass}`}>
      {/* Product image */}
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded bg-black/50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && (
            <span className={`text-xs px-2 py-1 rounded bg-theme${currentTheme} text-white font-bold`}>
              NEW
            </span>
          )}
          {product.bestseller && (
            <span className="text-xs px-2 py-1 rounded bg-white text-black font-bold">
              BESTSELLER
            </span>
          )}
          {product.featured && (
            <span className="text-xs px-2 py-1 rounded bg-black text-white font-bold border border-white/30">
              FEATURED
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute -bottom-10 left-0 w-full p-2 flex justify-between items-center bg-black/70 backdrop-blur-sm transition-all duration-300 group-hover:bottom-0">
          <Button size="sm" variant="ghost" className="p-1 hover:bg-white/10">
            <Heart className="h-5 w-5" />
          </Button>
          <Button size="sm" className={`bg-theme${currentTheme} hover:bg-theme${currentTheme}/80 text-white`}>
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product details */}
      <h3 className="text-lg font-medium mb-1">{product.name}</h3>
      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-xl font-bold ${themeClass} glow-text`}>
          ${product.price.toFixed(2)}
        </span>
        <span className="text-xs uppercase text-gray-400">
          {product.category}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
