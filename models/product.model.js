import db from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';

const productsRef = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const ref = doc(db, 'products', id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) throw new Error('Producto no encontrado');
  return { id: snapshot.id, ...snapshot.data() };
};

export const createProduct = async (data) => {
  const docRef = await addDoc(productsRef, data);
  return { id: docRef.id, ...data };
};

export const deleteProduct = async (id) => {
  const ref = doc(db, 'products', id);
  await deleteDoc(ref);
};
