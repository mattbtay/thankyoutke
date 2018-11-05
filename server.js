const express = require('express');
const images = './client/public/img/';
const fs = require('fs');

const path = require('path');

const app = express();
const port = process.env.PORT || 5000;



app.get('/pictures', (req, res) => {

    const img = [];

    fs.readdir(images, (err, files) => {
        files.forEach(file => {
          img.push(file);
        });

        res.send({ img: img });

      })


});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));