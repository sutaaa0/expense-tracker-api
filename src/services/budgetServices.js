const prisma = require('../database'); // Pastikan path sesuai

// Tambahkan Budget
const createBudget = async (data) => {
  return await prisma.budget.create({ data });
};

// Ambil semua Budget
const getAllBudgets = async () => {
  return await prisma.budget.findMany();
};

// Ambil Budget berdasarkan ID
const getBudgetById = async (id) => {
  return await prisma.budget.findUnique({ where: { id } });
};

// Update Budget
const updateBudget = async (id, data) => {
  return await prisma.budget.update({ where: { id }, data });
};

// Hapus Budget
const deleteBudget = async (id) => {
  return await prisma.budget.delete({ where: { id } });
};

module.exports = {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget
};
