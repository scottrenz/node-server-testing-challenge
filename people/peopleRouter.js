const router = require('express').Router();

const People = require('../people/peopleModel.js');

router.get('/people', (req, res) => {
    People.getAll()
      .then(people => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/people', (req, res) => {
    People.insert(req.body)
      .then(rows => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  router.delete('/people/:id', (req, res) => {
    People.remove(req.params.id)
      .then(rows => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
module.exports = router;
