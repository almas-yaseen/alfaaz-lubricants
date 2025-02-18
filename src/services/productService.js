/* eslint-disable no-console */
import axios from "axios";

// Base URL for API requests
const API_URL = "http://localhost:5001/api/products";

// Fetch all products
export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getBrandProducts = async (brand) => {
  try {
    const res = await axios.get(`${API_URL}/brand/?brand=${brand}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getSingleProduct = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data; // Return the updated category data if needed
  } catch (error) {
    console.error("Error editing product:", error);
    throw error; // Re-throw error to handle it in the calling function
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    const res = await axios.post(API_URL, product);
    return res.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Edit an existing product by ID
export const editProduct = async (updatedProduct, id) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return res.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
