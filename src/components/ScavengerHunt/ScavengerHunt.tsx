import ItemList from '../ItemList/ItemList';
import ScoreList from '../ScoreList/ScoreList';
import styles from './ScavengerHunt.module.css';

const ScavengerHunt = () => {
  return (
    <div className={styles.scavengerHunt}>
      <h1>Virtual Scavenger Hunt</h1>
      <div className={styles.container}>
        <ItemList />
        <ScoreList />
      </div>
    </div>
  );
};

export default ScavengerHunt;
