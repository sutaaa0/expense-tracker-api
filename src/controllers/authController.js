const authServices = require('../services/authServices');

// Fungsi untuk registrasi pengguna
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await authServices.registerUser(name, email, password);
    res.status(201).send({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).send({ error: error.message });
  }

};

// Fungsi untuk login pengguna
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authServices.loginUser(email, password);
    return res.json({ message: 'Login successful', token: token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(401).send({ error: error.message });
  }
};

module.exports = { register, login };
