import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScavengerHunt from './ScavengerHunt';
import { ScavengerHuntProvider } from '../../contexts/ScavengerHuntContext';

const renderWithContext = (component: React.ReactNode) => {
  return render(<ScavengerHuntProvider>{component}</ScavengerHuntProvider>);
};

describe('ScavengerHunt', () => {
  it('renders the scavenger hunt component', () => {
    renderWithContext(<ScavengerHunt />);
    expect(screen.getByText('Virtual Scavenger Hunt')).toBeInTheDocument();
    expect(screen.getByText('Scavenger Hunt Items')).toBeInTheDocument();
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });
});
