import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    next(error);
  }
};
