import express from "express";
import fs from 'node:fs'

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('Server Error')
        }
       res.send(html);
    })
});

app.listen(port, () => {
    console.log(`Server Running on localhost:${port}`);
});