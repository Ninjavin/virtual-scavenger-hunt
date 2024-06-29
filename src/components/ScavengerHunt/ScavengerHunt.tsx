import { useScavengerHunt } from '../../contexts/ScavengerHuntContext';

import ItemList from '../ItemList/ItemList';
import ScoreList from '../ScoreList/ScoreList';

const ScavengerHunt = () => {
  const { items, scores, addItem, addScore } = useScavengerHunt();

  return (
    <div>
      <h1> Virtual Scavenger Hunt</h1>
      <ItemList items={items} addItem={addItem} />
      <ScoreList scores={scores} addScore={addScore} />
    </div>
  );
};

export default ScavengerHunt;
