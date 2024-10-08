const expenseService = require('../services/expenseServices');
const { getUserById } = require('../services/userServices');

// Create Expense
const createExpense = async (req, res) => {
  try {
    const { userId, categoryId, amount, description, date } = req.body;
    const newExpense = await expenseService.createExpense(userId, categoryId, amount, description, date);
    res.status(201).send({ message: 'Expense created successfully', expense: newExpense });
  } catch (error) {
    console.error('Expense creation error:', error);
    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
};

// Get All Expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getAllExpenses();
    res.send(expenses);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


const getExpenseUser = async (req, res) => {
  try {
    const { userId } = req.params; // Mengakses userId dari parameter route
    console.log("ini userId :", userId);
    const expense = await expenseService.getExpenseUser(userId);
    if (expense) {
      console.log("ini expense nya ", expense);
      res.send(expense);
    } else {
      res.status(404).send({ error: 'Expense not found' });
    }
  } catch (error) {
    console.log("ini error nya ", error);
    res.status(500).send({ error: 'Internal Server Error', error: error.message });
  }
}

 
// Get Expense by ID
const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenseService.getExpenseById(id);
    if (expense) {
      res.send(expense);
    } else {
      res.status(404).send({ error: 'Expense not found' });
    }
  } catch (error) {
    console.log('Expense retrieval error:', error);
    res.status(500).send({ error: 'Internal Server Error', });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedExpense = await expenseService.updateExpense(id, updates);
    if (updatedExpense) {
      res.send({ message: 'Expense updated successfully', expense: updatedExpense });
    } else {
      res.status(404).send({ error: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await expenseService.deleteExpense(id);
    if (deletedExpense) {
      res.send({ message: 'Expense deleted successfully' });
    } else {
      res.status(404).send({ error: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense, getExpenseUser };
