const express = require('express');
const router = express.Router();

// A simple route to test
router.get('/', (req, res) => {
  res.status(200).send('Student Route is working');
});

module.exports = router;
