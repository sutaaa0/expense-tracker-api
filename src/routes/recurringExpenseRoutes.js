const express = require('express');
const router = express.Router();
const recurringExpenseController = require('../controllers/recurringExpenseController');

router.post('/', recurringExpenseController.createRecurringExpense);
router.get('/', recurringExpenseController.getRecurringExpenses);
router.put('/:id', recurringExpenseController.updateRecurringExpense);
router.delete('/:id', recurringExpenseController.deleteRecurringExpense);

module.exports = router;