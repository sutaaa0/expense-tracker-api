require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const authRoutes = require("./routes/authRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const recurringExpenseRoutes = require("./routes/recurringExpenseRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");
const dashboardRoutes  = require("./routes/dashboardRoutes");

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", authMiddleware, expenseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/budgets", authMiddleware, budgetRoutes);
app.use("/api/incomes", authMiddleware, incomeRoutes);
app.use("/api/recurring-expenses", authMiddleware, recurringExpenseRoutes);
app.use("/api/categories", authMiddleware, categoryRoutes);
app.use("/api/dashboard", authMiddleware, dashboardRoutes);
// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
