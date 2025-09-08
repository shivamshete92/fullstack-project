const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express Backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});