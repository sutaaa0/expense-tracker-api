const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.post('/incomes', incomeController.createIncome);
router.get('/incomes', incomeController.getIncomes);
router.put('/incomes/:id', incomeController.updateIncome);
router.delete('/incomes/:id', incomeController.deleteIncome);

module.exports = router;