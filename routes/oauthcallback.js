const express = require('express');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();

router.get('/', cors(), async (req, res) => {
  try {
    const data = req.query;
    const state = 'ipzmuRVqYj5r9LiNPks2dVsMR7XFNInHXWFYMxSC0';
    const client_id = 'a2dfc2d05c3a866886b7';
    const client_secret = 'c9c861933969c96d454f5fc66577468b6a89cec5';
    
    if(data.state == state) {
      axios.post("https://github.com/login/oauth/access_token", {client_id, client_secret, code: data.code})
      .then(response => {
        console.log(response.data)
        res.redirect('boxoal://login/' + response.data.split('=')[1].split('&')[0])
      }).catch(error => {
        console.log(error)
      })

    }
    
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;