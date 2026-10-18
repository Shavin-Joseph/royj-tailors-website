import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';
const StoreContext = createContext(null);
const storageKey = 'royj-saved-pieces';
export function StoreProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(value) ? [...new Set(value.filter(id => products.some(p => p.id === id)))] : [];
    } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* Save for this visit when storage is unavailable. */ }
  }, [saved]);
  const toggleSaved = id => setSaved(items => items.includes(id) ? items.filter(item => item !== id) : [...items, id]);
  return <StoreContext.Provider value={{ saved, toggleSaved }}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);
