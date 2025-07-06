const db = require("../config/db");

exports.getAchievements = (req, res) => {
  db.query("SELECT * FROM achievements ORDER BY date DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
