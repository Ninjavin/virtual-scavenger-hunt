import React from 'react';
import './App.css';
import { ScavengerHuntProvider } from './contexts/ScavengerHuntContext';
import ScavengerHunt from './components/ScavengerHunt/ScavengerHunt';

function App() {
  return (
    <ScavengerHuntProvider>
      <ScavengerHunt />
    </ScavengerHuntProvider>
  );
}

export default App;
