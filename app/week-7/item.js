import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li style={styles.item}>
            <strong>{name}</strong> - Quantity: {quantity}, Category: {category}
        </li>
    );
}
    const styles = {
        item: {
          padding: "10px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
          backgroundColor: "#AA336A",
          
        },
        category: {
          fontStyle: "italic",
          color: "#666",
        },
};

export default Item;