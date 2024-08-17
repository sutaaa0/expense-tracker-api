const express = require('express');
const { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense } = require('../controllers/expenseController');

const router = express.Router();

// Create Expense
router.post('/', createExpense);

// Get All Expenses
router.get('/', getAllExpenses);

// Get Expense by ID
router.get('/:id', getExpenseById);

// Update Expense
router.put('/:id', updateExpense);

// Delete Expense
router.delete('/:id', deleteExpense);

module.exports = router;
