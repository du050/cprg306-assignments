export default function ItemList({ items }) {
    return (
      <ul>
        {/* Render each item as a list item */}
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} - {item.category}
          </li>
        ))}
      </ul>
    );
  }
  

  const styles = {
    item: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
      
    },
    category: {
      fontStyle: "italic",
      color: "#666",
    },  
    };