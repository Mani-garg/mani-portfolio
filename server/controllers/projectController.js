const db = require("../config/db");

exports.getAllProjects = (req, res) => {
  const query = "SELECT * FROM projects";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
