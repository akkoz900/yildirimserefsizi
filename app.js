const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.ejs'));

});




app.get('/olustur', (req, res) => {

    const ad = req.query.ad;
    const numara = req.query.numara;

    const eposta = `${ad}_${numara}@gmail.com`

    res.render(path.join(__dirname, 'public', 'eposta.ejs'), { eposta: eposta });
});

app.listen(port, () => {
    console.log(`Sunucu localhost: ${port} adresinde çalışıyor..`);
});

