
import React, { useState } from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 py-4 border-b border-white/10">
      <div className="w-20 h-20 relative overflow-hidden rounded">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-md font-medium mb-1">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-2">{product.category}</p>
        <div className="flex items-center">
          <span className="font-bold mr-4">${product.price.toFixed(2)}</span>
          <div className="flex items-center border border-white/20 rounded">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-none text-white"
              onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-none text-white"
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="font-bold text-right whitespace-nowrap">
        ${(product.price * quantity).toFixed(2)}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        className="h-7 w-7 text-gray-400 hover:text-white"
        onClick={() => onRemove(product.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
