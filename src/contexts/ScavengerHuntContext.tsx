import React, { createContext, useContext, useState } from 'react';
import { Item, Score } from '../types';

interface ScavengerHuntContextType {
  items: Item[];
  scores: Score[];
  addItem: (name: string) => void;
  removeItem: (id: number) => void;
  toggleItemFound: (id: number) => void;
  addScore: (playerName: string, score: number) => void;
}

const ScavengerHuntContext = createContext<ScavengerHuntContextType | undefined>(undefined);

export const ScavengerHuntProvider: React.FunctionComponent<any> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [scores, setScores] = useState<Score[]>([]);

  const addItem = (name: string) => {
    setItems((prevItems) => [...prevItems, { id: Date.now(), name, found: false }]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleItemFound = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, found: !item.found } : item))
    );
  };

  const addScore = (playerName: string, score: number) => {
    setScores((prevScores) => [...prevScores, { id: Date.now(), playerName, score }]);
  };

  return (
    <ScavengerHuntContext.Provider
      value={{ items, scores, addItem, removeItem, toggleItemFound, addScore }}
    >
      {children}
    </ScavengerHuntContext.Provider>
  );
};

export const useScavengerHunt = () => {
  const context = useContext(ScavengerHuntContext);
  if (context === undefined) {
    throw new Error('useScavengerHunt must be used within a ScavengerHuntProvider!');
  }
  return context;
};
