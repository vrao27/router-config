const pool = require("./db/client.js");

//to get all users dnf try and catch block, when does pool.query not a func turn up?

const allUsers = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM users");
    console.log(results.rows)
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

const singleUser = async (req, res) => {
  try {
  } catch {}
};
