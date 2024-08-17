require('dotenv').config(); // Muat variabel lingkungan dari file .env
const app = require('./app');
const PORT = process.env.PORT; // Ambil port dari variabel lingkungan atau gunakan default

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
