import { addDoc, collection } from 'firebase/firestore';
import dotenv from 'dotenv';
import db from './models/firebase.js';

dotenv.config();

const productos = [
  {
    nombre: 'Silla Iron Wood',
    precio: 18000,
    stock: 5,
    descripcion: 'Silla artesanal hecha en hierro y madera.',
    categoria: 'muebles',
    imagen: 'https://via.placeholder.com/150',
    activo: true
  },
  {
    nombre: 'Banco de pesas reforzado',
    precio: 32000,
    stock: 2,
    descripcion: 'Banco de entrenamiento para musculación con soporte reforzado.',
    categoria: 'fitness',
    imagen: 'https://via.placeholder.com/150',
    activo: true
  },
  {
    nombre: 'Mesa industrial 2x1m',
    precio: 45000,
    stock: 1,
    descripcion: 'Mesa de diseño industrial de hierro con tapa de madera.',
    categoria: 'muebles',
    imagen: 'https://via.placeholder.com/150',
    activo: true
  }
];

const insertarProductos = async () => {
  try {
    const ref = collection(db, 'products');
    for (const producto of productos) {
      const doc = await addDoc(ref, producto);
      console.log(`Producto insertado con ID: ${doc.id}`);
    }
    console.log('Todos los productos fueron insertados con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('Error al insertar productos:', error);
    process.exit(1);
  }
};

insertarProductos();
