'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Définir l'état initial
      setMatches(media.matches);
      
      // Callback pour les changements
      const listener = () => setMatches(media.matches);
      
      // Écouteur pour la requête média
      media.addEventListener('change', listener);
      
      // Nettoyage
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);
  
  return matches;
}
