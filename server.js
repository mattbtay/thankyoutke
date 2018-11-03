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

app.listen(port, () => console.log(`Listening on port ${port}`));