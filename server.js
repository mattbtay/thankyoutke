const express = require('express');
const images = './client/public/img/';
const fs = require('fs');

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
  // serve any static files
  app.use(express.static(path.join(__dirname, 
    'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.joing(__dirname, '/client/build',
    'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));