const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

// Rute untuk operasi budget
router.post('/', budgetController.addBudget);
router.get('/', budgetController.getBudgets);
router.get('/:id', budgetController.getBudget);
router.put('/:id', budgetController.updateBudget);
router.delete('/:id', budgetController.deleteBudget);

module.exports = router;
