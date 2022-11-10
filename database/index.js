const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://ziqianli@localhost:5432/ziqianli',
  // comment out ssl if running app from local codebase
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

// save a new entry to DB
module.exports.save = (entry) => {
  const query = {
    text: 'INSERT INTO rainbow_foods (name, color, category) VALUES ($1, $2, $3)',
    values: entry
  };

  return pool
    .query(query)
    .then((result) => result)
    .catch((err) => { throw err; });
}

// retrieve either ONE entry that matches OR ALL entries in DB
module.exports.fetch = (entry) => {
  let query;
  if (entry) {
    query = `SELECT * FROM rainbow_foods WHERE name=${entry}`;
  } else {
    query = 'SELECT * FROM rainbow_foods ORDER BY count DESC';
  }

  return pool
    .query(query)
    .then((result) => result)
    .catch((err) => { throw err; });
}

// update DB when item clicked
module.exports.update = (entry) => {
  let query;
  if(entry) {
    query = `UPDATE rainbow_foods SET count=count+1 WHERE id=${entry.id}`;
  } else {
    query = 'UPDATE rainbow_foods SET count=0;';
  }

  return pool
    .query(query)
    .then((result) => result)
    .catch((err) => { throw err; });
}
