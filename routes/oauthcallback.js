const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = req.body;
    const state = 'ipzmuRV+qYj5r9LiNPks2dVsM+R7XFNInHXWFYMxSC0=';
    const client_id = 'a2dfc2d05c3a866886b7';
    const client_secret = 'c9c861933969c96d454f5fc66577468b6a89cec5';

    if(data.state == state) {
      axios.post("https://github.com/login/oauth/access_token", {client_id, client_secret, code: data.code})
      .then(response => {
        res.redirect('boxoal://login?access_token=' + response.data.access_token)
      })

    }
    
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;