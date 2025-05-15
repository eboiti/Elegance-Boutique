'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Fonction pour récupérer la valeur initiale
  const readValue = (): T => {
    // Vérifier si nous sommes côté client
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };
  
  // État pour stocker notre valeur
  const [storedValue, setStoredValue] = useState<T>(readValue);
  
  // Fonction pour mettre à jour la valeur
  const setValue = (value: T) => {
    try {
      // Permettre la mise à jour par fonction
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Mettre à jour l'état React
      setStoredValue(valueToStore);
      
      // Mettre à jour localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        
        // Déclencher un événement pour informer les autres instances
        window.dispatchEvent(new Event('local-storage'));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  // Écouter les changements dans d'autres instances
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };
    
    window.addEventListener('local-storage', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('local-storage', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return [storedValue, setValue];
}
