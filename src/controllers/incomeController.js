const prisma = require('../database');

const createIncome = async (req, res) => {
    try {
      const { userId, amount, source, date } = req.body;
  
      const newIncome = await prisma.income.create({
        data: {
          userId,
          amount,
          source,
          date
        }
      });
  
      res.status(201).json(newIncome);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getIncomes = async (req, res) => {
    try {
      const incomes = await prisma.income.findMany();
      res.status(200).json(incomes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const updateIncome = async (req, res) => {
    try {
      const { id } = req.params;
      const { amount, source, date } = req.body;
  
      const updatedIncome = await prisma.income.update({
        where: { id },
        data: {
          amount,
          source,
          date
        }
      });
  
      res.status(200).json(updatedIncome);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteIncome = async (req, res) => {
    try {
      const { id } = req.params;
  
      await prisma.income.delete({
        where: { id }
      });
  
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { createIncome, getIncomes, updateIncome, deleteIncome }