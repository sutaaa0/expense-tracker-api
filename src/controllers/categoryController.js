const categoryService = require('../services/categoryService');

// Fungsi untuk membuat kategori baru
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = await categoryService.createCategory({ name, description });
    res.status(201).send(newCategory);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Fungsi untuk mendapatkan semua kategori
const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Fungsi untuk mendapatkan kategori berdasarkan ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    res.send(category);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

// Fungsi untuk memperbarui kategori
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await categoryService.updateCategory(id, { name, description });
    res.send(updatedCategory);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Fungsi untuk menghapus kategori
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
