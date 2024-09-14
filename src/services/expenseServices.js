const prisma = require('../database');

// Create Expense
const createExpense = async (userId, categoryId, amount, description, date) => {
  return prisma.expense.create({
    data: {
      userId,
      categoryId,
      amount,
      description,
      date
    }
  });
};

// Get All Expenses
const getAllExpenses = async () => {
  return prisma.expense.findMany();
};

const getExpenseUser = async (userId) => {
  return prisma.expense.findMany({
    where: { userId: userId },
    include: {
      category: true
    }
  });
}

// Get Expense by ID
const getExpenseById = async (id) => {
  return prisma.expense.findUnique({
    where: { id }
  });
};

// Update Expense
const updateExpense = async (id, updates) => {
  return prisma.expense.update({
    where: { id },
    data: updates
  });
};

// Delete Expense
const deleteExpense = async (id) => {
  return prisma.expense.delete({
    where: { id }
  });
};

module.exports = { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense,getExpenseUser };
