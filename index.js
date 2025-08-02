import express from "express";
import fs from 'node:fs'
import http from "http"
import { Server } from "socket.io"
//console.log('test')
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server); 
//const sock = Socket;

app.use(express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('Server Error')
        }
       res.send(html);
    })
});

io.on('connection', socket => {
    
    console.log('User connected')

})

app.listen(port, () => {
    console.log(`Server Running on localhost:${port}`);
});