export default function ItemList({ items }) {
    return (
      <ul>
        {/* Render each item as a list item */}
        {items.map((item) => (
          <li key={item.id} style={styles.item}>
            {item.name} - {item.quantity}  <span style={styles.category}>{item.category}</span>
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
      backgroundColor: "pink",
      color: "#AA336A",
    },
    category: {
      fontWeight: "bold", // Change to fontWeight for bold text
      fontStyle: "italic", // Keep italic style
      color: "#AA336A",
      
    },  
    };