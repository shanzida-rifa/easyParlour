import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for a single cart item
export interface CartItem {
  id: string;
  name: string;
  price: number;
  // Add more fields if needed (service type, image, etc.)
  date: string;
  time: string;
  cartId: string;
}

// Define the shape of our context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'date' | 'time' | 'cartId'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// Create context with proper typing
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'date' | 'time' | 'cartId'>) => {
    const cartItem: CartItem = {
      ...item,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      cartId: Date.now().toString(),
    };
    setCartItems(prev => [...prev, cartItem]);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
