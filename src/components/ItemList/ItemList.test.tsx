import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from './ItemList';
import { ScavengerHuntProvider } from '../../contexts/ScavengerHuntContext';

const renderWithContext = (component: React.ReactNode) => {
  return render(<ScavengerHuntProvider>{component}</ScavengerHuntProvider>);
};

describe('ItemList', () => {
  it('renders the item list', () => {
    renderWithContext(<ItemList />);
    expect(screen.getByText('Scavenger Hunt Items')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter new item')).toBeInTheDocument();
    expect(screen.getByText('Add Item')).toBeInTheDocument();
  });

  it('adds a new item when the form is submitted', () => {
    renderWithContext(<ItemList />);
    const input = screen.getByPlaceholderText('Enter new item');
    const submitButton = screen.getByText('Add Item');

    fireEvent.change(input, { target: { value: 'New Item' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('New Item')).toBeInTheDocument();
  });

  it('removes an item when the remove button is clicked', () => {
    renderWithContext(<ItemList />);
    const input = screen.getByPlaceholderText('Enter new item');
    const submitButton = screen.getByText('Add Item');

    fireEvent.change(input, { target: { value: 'Test Item' } });
    fireEvent.click(submitButton);

    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    expect(screen.queryByText('Test Item')).not.toBeInTheDocument();
  });

  it('toggles item found status when clicked', () => {
    renderWithContext(<ItemList />);
    const input = screen.getByPlaceholderText('Enter new item');
    const submitButton = screen.getByText('Add Item');

    fireEvent.change(input, { target: { value: 'Toggle Item' } });
    fireEvent.click(submitButton);

    const item = screen.getByText('Toggle Item');
    fireEvent.click(item);

    expect(item.parentElement).toHaveClass('found');
  });
});
