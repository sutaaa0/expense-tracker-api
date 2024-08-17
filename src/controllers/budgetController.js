const budgetService = require('../services/budgetServices');

// Tambahkan Budget
const addBudget = async (req, res) => {
  try {
    const budget = await budgetService.createBudget(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Ambil semua Budget
const getBudgets = async (req, res) => {
  try {
    const budgets = await budgetService.getAllBudgets();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Ambil Budget berdasarkan ID
const getBudget = async (req, res) => {
  try {
    const budget = await budgetService.getBudgetById(req.params.id);
    if (budget) {
      res.status(200).json(budget);
    } else {
      res.status(404).json({ error: 'Budget not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Budget
const updateBudget = async (req, res) => {
  try {
    const budget = await budgetService.updateBudget(req.params.id, req.body);
    if (budget) {
      res.status(200).json(budget);
    } else {
      res.status(404).json({ error: 'Budget not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Hapus Budget
const deleteBudget = async (req, res) => {
  try {
    await budgetService.deleteBudget(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addBudget,
  getBudgets,
  getBudget,
  updateBudget,
  deleteBudget
};
