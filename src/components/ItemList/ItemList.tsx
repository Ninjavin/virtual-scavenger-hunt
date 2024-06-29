import React, { useState } from 'react';
import { useScavengerHunt } from '../../contexts/ScavengerHuntContext';
import styles from './ItemList.module.css';

const ItemList: React.FC = () => {
  const { items, addItem, removeItem, toggleItemFound } = useScavengerHunt();

  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addItem(newItemName.trim());
      setNewItemName('');
    }
  };

  return (
    <div className={styles.itemList}>
      <h2>Scavenger Hunt Items</h2>
      <form onSubmit={handleSubmit} className={styles.addItemForm}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter new item"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Item
        </button>
      </form>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={`${styles.item} ${item.found ? styles.found : ''}`}>
            <span onClick={() => toggleItemFound(item.id)}>{item.name}</span>
            <button onClick={() => removeItem(item.id)} className={styles.removeButton}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
