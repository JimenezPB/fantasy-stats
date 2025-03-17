import { db, doc, getDoc, collection, updateDoc, deleteDoc, addDoc } from './firebase';

const collectionName = 'users';

// CREATE
export const createItem = async (item) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, item);
    return data.id;
}

// UPDATE
export const updateItem = async (id, item) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, item);
}

// READ
export const readItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    const data = await getDoc(docRef);
    return data.data();
}


// DELETE
export const deleteItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}
