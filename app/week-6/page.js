import React from 'react';
import ItemList from './item-list';


const Page = () => {
    return (
        <main>
            <h1 styles={styles.title}>Shopping List</h1>
            <ItemList />
        </main>
    );
};
    const styles = {
        title : {
            color: "black",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            margin: "0",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            borderRadius: "8px",
    },
};



export default Page;