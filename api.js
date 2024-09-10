require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const api = process.env.API;
  app.get ('/search', async function (req, res) {
    try {
        const movieTitle = req.query.q;
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${movieTitle}`)
       
        const result = response.data;
        res.json({
          result: result
        })
    }catch(e) {
        console.log("Error")
        return;
    }

  }) 
   
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})