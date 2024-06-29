import React, { useState } from 'react';
import { Score } from '../../types';

interface ScoreListProps {
  scores: Score[];
  addScore: (score: Score) => void;
}

const ScoreList: React.FC<ScoreListProps> = ({ scores, addScore }) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerScore, setNewPlayerScore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim() && !isNaN(Number(newPlayerScore))) {
      addScore({
        id: Date.now(),
        playerName: newPlayerName.trim(),
        score: Number(newPlayerScore),
      });
      setNewPlayerName('');
      setNewPlayerScore('');
    }
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Player name"
        />
        <input
          type="number"
          value={newPlayerScore}
          onChange={(e) => setNewPlayerScore(e.target.value)}
          placeholder="Score"
        />
        <button type="submit">Add Score</button>
      </form>
      <ul>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((score) => (
            <li key={score.id}>
              {score.playerName}: {score.score}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ScoreList;
