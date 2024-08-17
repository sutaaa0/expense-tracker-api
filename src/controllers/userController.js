const userServices = require('../services/userServices');

// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userServices.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(404).json({ error: 'User not found' });
  }
};

// Fungsi untuk memperbarui pengguna
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await userServices.updateUser(userId, updateData);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Fungsi untuk menghapus pengguna
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userServices.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
