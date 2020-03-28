import React, { useState, createContext } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems(prevState => [...prevState, item])
  }

  const itemsWithQuantities = (items) => {
    return items.reduce((acc, item) => {
      const found = acc.find(_item => _item.sku === item.sku);
      if (found) {
        found.quantity += 1
      } else {
        acc.push({
          quantity: 1,
          sku: item.sku,
          ...item
        })
      }
      return acc
    }, [])
  }

  return (
    <CartContext.Provider
      value={{
        items: itemsWithQuantities(items),
        itemsCount: items.length,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider;