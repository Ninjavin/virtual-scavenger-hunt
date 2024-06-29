import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from './ItemList';

describe('ItemList', () => {
  const mockItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  const mockAddItem = jest.fn();

  it('renders the list of items', () => {
    render(<ItemList items={mockItems} addItem={mockAddItem} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('adds a new item when the form is submitted', async () => {
    render(<ItemList items={mockItems} addItem={mockAddItem} />);
    const input = screen.getByPlaceholderText('Enter new item');
    const submitButton = screen.getByText('Add Item');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'New Item' } });
      fireEvent.click(submitButton);
    });

    expect(mockAddItem).toHaveBeenCalledWith({ id: expect.any(Number), name: 'New Item' });
  });

  it('does not add an empty item', () => {
    render(<ItemList items={mockItems} addItem={mockAddItem} />);
    const submitButton = screen.getByText('Add Item');

    fireEvent.click(submitButton);

    expect(mockAddItem).not.toHaveBeenCalled();
  });
});
