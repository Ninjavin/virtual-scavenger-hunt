import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScoreList from './ScoreList';
import { ScavengerHuntProvider } from '../../contexts/ScavengerHuntContext';

const renderWithContext = (component: React.ReactNode) => {
  return render(<ScavengerHuntProvider>{component}</ScavengerHuntProvider>);
};

describe('ScoreList', () => {
  it('renders the score list', () => {
    renderWithContext(<ScoreList />);
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Player name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Score')).toBeInTheDocument();
    expect(screen.getByText('Add Score')).toBeInTheDocument();
  });

  it('adds a new score when the form is submitted', () => {
    renderWithContext(<ScoreList />);
    const nameInput = screen.getByPlaceholderText('Player name');
    const scoreInput = screen.getByPlaceholderText('Score');
    const submitButton = screen.getByText('Add Score');

    fireEvent.change(nameInput, { target: { value: 'Test Player' } });
    fireEvent.change(scoreInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Test Player: 100')).toBeInTheDocument();
  });

  it('sorts scores in descending order', () => {
    renderWithContext(<ScoreList />);
    const nameInput = screen.getByPlaceholderText('Player name');
    const scoreInput = screen.getByPlaceholderText('Score');
    const submitButton = screen.getByText('Add Score');

    // Add first score
    fireEvent.change(nameInput, { target: { value: 'Player 1' } });
    fireEvent.change(scoreInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    // Add second score
    fireEvent.change(nameInput, { target: { value: 'Player 2' } });
    fireEvent.change(scoreInput, { target: { value: '200' } });
    fireEvent.click(submitButton);

    const scores = screen.getAllByRole('listitem');
    expect(scores[0]).toHaveTextContent('Player 2: 200');
    expect(scores[1]).toHaveTextContent('Player 1: 100');
  });
});
