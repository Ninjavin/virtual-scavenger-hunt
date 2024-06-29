import React, { useState } from 'react';
import { useScavengerHunt } from '../../contexts/ScavengerHuntContext';
import styles from './ScoreList.module.css';

const ScoreList: React.FC = () => {
  const { scores, addScore } = useScavengerHunt();
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim() && !isNaN(Number(playerScore))) {
      addScore(playerName.trim(), Number(playerScore));
      setPlayerName('');
      setPlayerScore('');
    }
  };

  return (
    <div className={styles.scoreList}>
      <h2>Leaderboard</h2>
      <form onSubmit={handleSubmit} className={styles.addScoreForm}>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Player name"
          className={styles.input}
        />
        <input
          type="number"
          value={playerScore}
          onChange={(e) => setPlayerScore(e.target.value)}
          placeholder="Score"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Score
        </button>
      </form>
      <ul className={styles.list}>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((score) => (
            <li key={score.id} className={styles.score}>
              {score.playerName}: {score.score}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ScoreList;
