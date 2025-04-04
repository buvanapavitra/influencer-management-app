const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
let influencers = [];
app.post("/api/influencers", (req, res) => {
  const influencer = req.body;
  influencers.push(influencer);
  res.status(201).json(influencer);
});
app.get("/api/influencers", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = influencers.filter(i =>
      `${i.firstName} ${i.lastName}`.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(influencers);
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
