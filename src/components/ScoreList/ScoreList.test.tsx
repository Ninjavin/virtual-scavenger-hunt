import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScoreList from './ScoreList';

describe('ScoreList', () => {
  const mockScores = [
    { id: 1, playerName: 'Player 1', score: 100 },
    { id: 2, playerName: 'Player 2', score: 200 },
  ];
  const mockAddScore = jest.fn();

  it('renders the list of scores', () => {
    render(<ScoreList scores={mockScores} addScore={mockAddScore} />);
    expect(screen.getByText('Player 1: 100')).toBeInTheDocument();
    expect(screen.getByText('Player 2: 200')).toBeInTheDocument();
  });

  it('adds a new score when the form is submitted', () => {
    render(<ScoreList scores={mockScores} addScore={mockAddScore} />);
    const nameInput = screen.getByPlaceholderText('Player name');
    const scoreInput = screen.getByPlaceholderText('Score');
    const submitButton = screen.getByText('Add Score');

    fireEvent.change(nameInput, { target: { value: 'New Player' } });
    fireEvent.change(scoreInput, { target: { value: '300' } });
    fireEvent.click(submitButton);

    expect(mockAddScore).toHaveBeenCalledWith({
      id: expect.any(Number),
      playerName: 'New Player',
      score: 300,
    });
  });

  it('does not add a score with empty name or invalid score', () => {
    render(<ScoreList scores={mockScores} addScore={mockAddScore} />);
    const submitButton = screen.getByText('Add Score');

    fireEvent.click(submitButton);

    expect(mockAddScore).not.toHaveBeenCalled();
  });

  it('sorts scores in descending order', () => {
    render(<ScoreList scores={mockScores} addScore={mockAddScore} />);
    const scoreItems = screen.getAllByRole('listitem');
    expect(scoreItems[0].textContent).toBe('Player 2: 200');
    expect(scoreItems[1].textContent).toBe('Player 1: 100');
  });
});
