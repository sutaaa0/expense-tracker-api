// src/services/getDashboardDataService.js
const prisma = require('../database');

const getDashboardDataService = async (userId) => {
  const totalIncome = await prisma.income.aggregate({
    _sum: { amount: true },
    where: { userId },
  });

  const totalExpense = await prisma.expense.aggregate({
    _sum: { amount: true },
    where: { userId },
  });

  const monthlyIncome = await prisma.income.groupBy({
    by: ['date'],
    _sum: {
      amount: true,
    },
    where: { userId },
    orderBy: { date: 'asc' },
  });

  const monthlyExpense = await prisma.expense.groupBy({
    by: ['date'],
    _sum: {
      amount: true,
    },
    where: { userId },
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
