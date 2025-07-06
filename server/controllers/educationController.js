const db = require("../config/db");

exports.getEducation = (req, res) => {
  db.query("SELECT * FROM education ORDER BY end_year DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
