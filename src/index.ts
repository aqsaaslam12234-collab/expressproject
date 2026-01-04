import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backed" });
});
app.post("/", (req, res) => {
  res.json({ message: "This is post Api" });
});

app.patch("/", (req, res) => {
  res.json({ message: "Welcome to patch api " });
});

app.delete("/users", (req, res) => {
  res.json({ message: "Welcome to delete api " });
});

app.listen(PORT, () => {
  console.log(`Server is listing at PORT ${PORT}`);
});
