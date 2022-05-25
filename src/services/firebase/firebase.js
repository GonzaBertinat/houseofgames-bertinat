import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqDQEjXVX-h92_bOEiB77WSkcZ1_8TAjs",
    authDomain: "houseofgames-bertinat.firebaseapp.com",
    projectId: "houseofgames-bertinat",
    storageBucket: "houseofgames-bertinat.appspot.com",
    messagingSenderId: "297769063290",
    appId: "1:297769063290:web:79b8e4dc066a92a641bcc3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllItems = async () => {
    const itemsCollection = collection(db, 'items');
    return await getDocs(itemsCollection);
}

export const getItemsByCategoryId = async (categoryId) => {
    const itemsCollection = collection(db, 'items');
    const q = query(itemsCollection, where('category', '==', categoryId));
    return await getDocs(q);
}

export const getItemById = async (itemId) => {
    const itemRef = doc(db, 'items', itemId);
    return await getDoc(itemRef);
}

export const createOrder = async (order) => {
    const ordersCollection = collection(db, 'orders');
    return await addDoc(ordersCollection, order)
}

export const updateItem = async (itemId, changes) => {
    const itemRef = doc(db, 'items', itemId);
    await updateDoc(itemRef, changes);
}
