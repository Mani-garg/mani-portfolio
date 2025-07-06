const db = require("../config/db");

exports.getAbout = (req, res) => {
  db.query("SELECT * FROM about LIMIT 1", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};
