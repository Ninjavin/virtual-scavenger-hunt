import { useState } from 'react';

const useScavengerHuntStore = () => {
  const [items, setItems] = useState<any[]>([]);
  const [scores, setScores] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const addScore = (score: any) => {
    setScores((prevScores) => [...prevScores, score]);
  };

  return {
    items,
    scores,
    addItem,
    addScore,
  };
};

export default useScavengerHuntStore;
