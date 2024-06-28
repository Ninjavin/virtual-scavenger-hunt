import React, { useState } from "react";


const ItemList: React.FunctionComponent <any>= ({items, addItem}) => {
    const [itemName, setItemName] = useState("");

    const handleAddItem = () => {
        if (itemName.trim() !== '') {
          addItem({ id: items.length + 1, name: itemName });
          setItemName('');
        }
      };

    return (
        <div>
      <h2>Items List</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    )
}

export default ItemList;