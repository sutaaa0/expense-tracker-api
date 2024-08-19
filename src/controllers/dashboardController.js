// src/controllers/dashboardController.js
const getDashboardDataService = require('../services/dashboardServices');

const getDashboardData = async (req, res) => {
  try {
    const { userId } = req.params;  // Mengambil userId dari parameter route
    const dashboardData = await getDashboardDataService(userId);  // Memanggil service dengan userId
    res.json(dashboardData);  // Mengirimkan response dalam bentuk JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data dashboard.' });
  }
};

module.exports = {
  getDashboardData,
};
