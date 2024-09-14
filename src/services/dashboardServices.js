// src/services/getDashboardDataService.js
const prisma = require('../database');

const getDashboardDataService = async (userId, filters) => {
  const { startDate, endDate, category } = filters;

  const whereConditions = { userId };
  if (startDate && endDate) {
    whereConditions.date = { gte: new Date(startDate), lte: new Date(endDate) };
  }
  if (category) {
    whereConditions.categoryId = category;
  }

  const totalIncome = await prisma.income.aggregate({
    _sum: { amount: true },
    where: whereConditions,
  });

  const totalExpense = await prisma.expense.aggregate({
    _sum: { amount: true },
    where: whereConditions,
  });

  const monthlyIncome = await prisma.income.groupBy({
    by: ['date'],
    _sum: { amount: true },
    where: whereConditions,
    orderBy: { date: 'asc' },
  });

  const monthlyExpense = await prisma.expense.groupBy({
    by: ['date'],
    _sum: { amount: true },
    where: whereConditions,
    orderBy: { date: 'asc' },
  });

  const remainingBudget = (totalIncome._sum.amount || 0) - (totalExpense._sum.amount || 0);

  return {
    totalIncome: totalIncome._sum.amount || 0,
    totalExpense: totalExpense._sum.amount || 0,
    remainingBudget,
    monthlyIncome,
    monthlyExpense,
  };
};

module.exports = getDashboardDataService;
