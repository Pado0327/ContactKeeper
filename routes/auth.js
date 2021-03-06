const express = require('express');
const router = express.Router();

// @Route       GET api/auth
// @desc        Get looged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @Route       POST api/auth
// @desc        Auth user & get token
// @access      public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
