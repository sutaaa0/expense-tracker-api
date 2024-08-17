const prisma = require("../database");
// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      expenses: true,
      incomes: true,
      budgets: true,
      recurringExpenses: true,
    },
  });
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// Fungsi untuk memperbarui pengguna
const updateUser = async (userId, updateData) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });

  return updatedUser;
};

// Fungsi untuk menghapus pengguna
const deleteUser = async (userId) => {
  await prisma.user.delete({
    where: { id: userId },
  });
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
