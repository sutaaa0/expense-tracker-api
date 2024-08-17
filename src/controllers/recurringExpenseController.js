const prisma = require('../database');

const createRecurringExpense = async (req, res) => {
    try {
      const { userId, categoryId, amount, description, frequency, startDate, endDate } = req.body;
  
      const newRecurringExpense = await prisma.recurringExpense.create({
        data: {
          userId,
          categoryId,
          amount,
          description,
          frequency,
          startDate,
          endDate
        }
      });
  
      res.status(201).json(newRecurringExpense);
    } catch (error) {
      console.log("ini error nya : ",error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getRecurringExpenses = async (req, res) => {
    try {
      const recurringExpenses = await prisma.recurringExpense.findMany();
      res.status(200).json(recurringExpenses);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const updateRecurringExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const { amount, description, frequency, startDate, endDate } = req.body;
  
      const updatedRecurringExpense = await prisma.recurringExpense.update({
        where: { id },
        data: {
          amount,
          description,
          frequency,
          startDate,
          endDate
        }
      });
  
      res.status(200).json(updatedRecurringExpense);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteRecurringExpense = async (req, res) => {
    try {
      const { id } = req.params;
  
      await prisma.recurringExpense.delete({
        where: { id }
      });
  
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = { createRecurringExpense, getRecurringExpenses, updateRecurringExpense, deleteRecurringExpense };