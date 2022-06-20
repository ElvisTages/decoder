const express = require('express'),
        app = express();
const bodyParser = require("body-parser");        
const fs = require('fs');     
const fileUpload = require('express-fileupload');
const decoder = require("./parser.js")
  
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(fileUpload({})); 

const host = '127.0.0.1';
const port = 80;
    
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/html/index.html")
    });
    app.get('/styles.css', (req, res) => {
        res.sendFile(__dirname + "/html/styles.css")
    });
    app.get('/main.js', (req, res) => {
        res.sendFile(__dirname + "/html/main.js")
    });
    

    app.post('/', (req,res)=>{
        console.log(req)
        res.send(req.body)
    })

    app.post('/upload', (req,res)=>{
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
          }
        console.log(req.files.file);
        fs.writeFile(`${req.files.file.name}`, req.files.file.data, ()=>{})
        decoder.Decoder(`${req.files.file.name}`)
        
    })



app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
