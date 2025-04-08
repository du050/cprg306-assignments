import { db } from "../../week-9/_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



export async function getItems(userId) {
    if (!userId) {
        console.error("Error: Missing user ID");
        return [];
    }

    try {
        const items = [];
        const q = query(collection(db, `users/${userId}/items`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
        return items;
    } catch (error) {
        console.error("Failed to fetch items:", error);
        return [];
    }
}

export async function addItem(userId, item) {
    if (!userId) {
        console.error("Error: Missing user ID");
        return null;
    }

    try {
        const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
        return docRef.id;
    } catch (error) {
        console.error("Failed to add item:", error);
        return null;
    }
}

const shoppingListService = {
    getItems,
    addItem
};

export default shoppingListService;