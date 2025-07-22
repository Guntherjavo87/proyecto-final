import * as productModel from '../models/product.model.js';

export async function getAllProducts() {
  return await productModel.getAll();
}

export async function getProductById(id) {
  return await productModel.getById(id);
}

export async function createProduct(data) {
  return await productModel.create(data);
}

export async function deleteProduct(id) {
  return await productModel.deleteById(id);
}
