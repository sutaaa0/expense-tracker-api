const prisma = require('../database');

// Model untuk kategori
const createCategory = (data) => {
  return prisma.category.create({ data });
};

const getCategories = () => {
  return prisma.category.findMany();
};

const getCategoryById = (id) => {
  return prisma.category.findUnique({ where: { id } });
};

const updateCategory = (id, data) => {
  return prisma.category.update({ where: { id }, data });
};

const deleteCategory = (id) => {
  return prisma.category.delete({ where: { id } });
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
