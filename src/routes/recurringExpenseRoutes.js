const express = require('express');
const router = express.Router();
const recurringExpenseController = require('../controllers/recurringExpenseController');

router.post('/recurring-expenses', recurringExpenseController.createRecurringExpense);
router.get('/recurring-expenses', recurringExpenseController.getRecurringExpenses);
router.put('/recurring-expenses/:id', recurringExpenseController.updateRecurringExpense);
router.delete('/recurring-expenses/:id', recurringExpenseController.deleteRecurringExpense);

module.exports = router;