import React, { useState } from 'react';
import { Item } from '../../types';

interface ItemListProps {
  items: Item[];
  addItem: (item: Item) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addItem({ id: Date.now(), name: newItemName.trim() });
      setNewItemName('');
    }
  };

  return (
    <div>
      <h2>Scavenger Hunt Items</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter new item"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
