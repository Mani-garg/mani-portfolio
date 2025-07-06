const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/achievements", require("./routes/achievementRoutes"));





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
