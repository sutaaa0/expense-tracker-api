const express = require('express');
const { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense, getExpenseUser } = require('../controllers/expenseController');
const { getFilteredAndSortedExpenses } = require('../services/expenseServices');

const router = express.Router();

// Create Expense
router.post('/', createExpense);

// Get All Expenses
router.get('/', getAllExpenses);

router.get('/:userId', getExpenseUser);

// Get Expense by ID
router.get('/:id', getExpenseById);

// Update Expense
router.put('/:id', updateExpense);

// Delete Expense
router.delete('/:id', deleteExpense);


module.exports = router;
