import React from 'react';
import { ScavengerHuntProvider } from './contexts/ScavengerHuntContext';
import ScavengerHunt from './components/ScavengerHunt/ScavengerHunt';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ScavengerHuntProvider>
        <ScavengerHunt />
      </ScavengerHuntProvider>
    </div>
  );
};
export default App;
