const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute untuk mendapatkan semua pengguna
router.get('/', userController.getAllUsers);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Rute untuk memperbarui pengguna
router.put('/:id', userController.updateUser);

// Rute untuk menghapus pengguna
router.delete('/:id', userController.deleteUser);

module.exports = router;
