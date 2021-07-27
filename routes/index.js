const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'NeverStopLearning' });
});

const testJSON = [
  {
    name: 'Santi',
    username: 'ZeroPlusCode',
  },
  {
    name: 'Piyawat',
    usernamne: 'Drunkman',
  },
];

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON);
});

module.exports = router;
