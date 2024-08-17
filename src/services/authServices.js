const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../database'); // Pastikan Anda menggunakan konfigurasi yang benar

// Fungsi untuk registrasi pengguna
const registerUser = async (name, email, password) => {
  // Cek apakah email sudah terdaftar
  const existingUser = await prisma.user.findUnique({
    where: { email: email }
  });

  if (existingUser) {
    throw new Error('Email already registered');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Buat pengguna baru
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword
    }
  });

  return newUser;
};

// Fungsi untuk login pengguna
const loginUser = async (email, password) => {
  // Temukan pengguna berdasarkan email
  const user = await prisma.user.findUnique({
    where: { email: email }
  });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Verifikasi password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Buat JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

module.exports = { registerUser, loginUser };
