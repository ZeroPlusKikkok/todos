const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ test: 'TO DO Anything' });
});

module.exports = router;
