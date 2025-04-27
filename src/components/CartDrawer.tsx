
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X, ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import { useScroll } from '@/context/ScrollContext';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/products';
import AddressForm from './AddressForm';

interface CartItem {
  productId: number;
  quantity: number;
}

const CartDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const { toast } = useToast();
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
    if (showCheckout) setShowCheckout(false);
  };
  
  const addToCart = (productId: number) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.productId === productId);
      if (exists) {
        return prev.map(item => 
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => item.productId === productId ? { ...item, quantity } : item)
    );
  };
  
  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };
  
  const getProductDetails = (productId: number) => {
    return products.find(p => p.id === productId);
  };
  
  const cartTotal = cartItems.reduce((sum, item) => {
    const product = getProductDetails(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);
  
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some products to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    setShowCheckout(true);
  };
  
  const handleCompleteOrder = () => {
    toast({
      title: "Order Placed",
      description: "Thank you for your order!",
    });
    setCartItems([]);
    setShowCheckout(false);
    setIsOpen(false);
  };
  
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleCart}
        className="relative hover:bg-white/10"
      >
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-black rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
      
      <div 
        className={`fixed top-0 right-0 h-screen w-full md:w-96 bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif">
              {showCheckout ? 'Checkout' : 'Your Cart'}
            </h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart}
              className="hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {showCheckout ? (
              <AddressForm />
            ) : (
              cartItems.length > 0 ? (
                cartItems.map((item) => {
                  const product = getProductDetails(item.productId);
                  if (!product) return null;
                  return (
                    <CartItem 
                      key={item.productId}
                      product={product}
                      quantity={item.quantity}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  );
                })
              ) : (
                <div className="text-center py-10">
                  <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-400">Your cart is empty</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              )
            )}
          </div>
          
          <div className="border-t border-white/10 pt-4">
            {!showCheckout && (
              <>
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                
                <Button 
                  className="w-full mb-2"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </>
            )}
            
            {showCheckout && (
              <Button 
                className="w-full mb-2"
                onClick={handleCompleteOrder}
              >
                Complete Order (${cartTotal.toFixed(2)})
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default CartDrawer;
