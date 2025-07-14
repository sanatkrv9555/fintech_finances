// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/users");
// const stockRoutes = require("./routes/stock"); // ✅

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

// // Routes

// app.use("/api/users", userRoutes);
// app.use("/api/stock", stockRoutes); // ✅ Attach stock router

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const stockRoutes = require("./routes/stock");

dotenv.config();
const app = express();

// ✅ CORS configuration to allow frontend (Render + Local Dev)
app.use(cors({
  origin: [
    "https://fintech-finances-2.onrender.com", // Render frontend
    "http://localhost:5173"                    // Local frontend
  ],
  credentials: true
}));

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ API Routes
app.use("/api/users", userRoutes);
app.use("/api/stock", stockRoutes);

// ✅ Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

