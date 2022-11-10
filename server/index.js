const express = require("express");
const path = require("path");
const db = require("../database/index.js");

var exampleData = require("../example-data.json");

const port = process.env.PORT || 7777;

const app = express();

app.use(express.static(path.join(__dirname, "/../client")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all veggie/fruit data from DB
app.get('/index', (req, res) => {
  db.fetch()
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

// handle post request for adding veggie/fruit with color with inital count set to 0
app.post('/add-item', (req, res) => {
  var data = req.body;

  // convert object to an array
  const entry = Object.keys(data).reduce((entry, key) => {
    const temp = data[key].toLowerCase();
    entry.push(temp);
    return entry;
    }, []);

  db.save(entry)
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      if(err.toString().includes('duplicate')) {
        res.status(500).send('Food already exists. Please enter a different one');
      } else {
        res.status(500).send('unable to save entry to database. ' + err);
      }
    });
})

// handle patch request for adding count on veggie/fruit
app.patch('/click-item', (req, res) => {
  var clicked = req.body;
  db.update(clicked)
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

// handle delete request to clear count on all document
app.delete('/restart', (req, res) => {
  db.update()
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})