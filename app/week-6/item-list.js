"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Ensure itemsData is a valid array
  if (!Array.isArray(itemsData) || itemsData.length === 0) {
    return <p style={{ color: "red" }}>Error: No items found.</p>;
  }

  // Sort items without modifying the original array
  const sortedItems = [...itemsData].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Shopping List</h2>
      <p style={styles.instructions}>
        Click a button to sort items by <strong>Name</strong> or <strong>Category</strong>.
      </p>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setSortBy("name")}
          style={{ ...styles.button, backgroundColor: sortBy === "name" ? "#4CAF50" : "#ddd" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ ...styles.button, backgroundColor: sortBy === "category" ? "#4CAF50" : "#ddd" }}
        >
          Sort by Category
        </button>
      </div>
      <ul style={styles.list}>
        {sortedItems.map((item) => (
          <Item  key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    color: "black",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  instructions: {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "5px",
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor : "#f9f9f9",
  },
};
