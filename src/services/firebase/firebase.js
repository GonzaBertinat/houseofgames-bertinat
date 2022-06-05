import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
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
