const router = require('express').Router();

const Hobbits = require('../hobbits/hobbitsModel.js');

router.get('/hobbits', (req, res) => {
    Hobbits.getAll()
      .then(hobbits => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/hobbits', (req, res) => {
    Hobbits.insert(req.body)
      .then(rows => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  router.delete('/hobbits/:id', (req, res) => {
    Hobbits.remove(req.params.id)
      .then(rows => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
module.exports = router;
