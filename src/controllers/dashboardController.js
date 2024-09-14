// src/controllers/dashboardController.js
const getDashboardDataService = require('../services/dashboardServices');

const getDashboardData = async (req, res) => {
  try {
    const { userId } = req.params;
    const { startDate, endDate, category } = req.query;

    const dashboardData = await getDashboardDataService(userId, { startDate, endDate, category });
    res.status(200).send(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
};

module.exports = { getDashboardData };
