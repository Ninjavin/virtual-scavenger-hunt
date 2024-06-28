import React from 'react';
import logo from './logo.svg';
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
