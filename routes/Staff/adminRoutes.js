const express = require('express');
const router = express.Router();

// A simple route to test
router.get('/', (req, res) => {
  res.status(200).send('Admin Route is working');
});

// You can add more routes here as needed

module.exports = router;
