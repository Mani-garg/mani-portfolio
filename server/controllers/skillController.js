const db = require("../config/db");

exports.getAllSkills = (req, res) => {
  db.query("SELECT * FROM skills", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
