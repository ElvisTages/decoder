const iconv = require('iconv-lite');
const fs = require("fs");

//let buff = "win.xml"

function decode(buff){
    fs.readFile(buff, null, (err, data) => { 
        console.log(buff)
    
        const encodedData = iconv.encode(iconv.decode(data, 'win1251'), 'utf8')
        console.log(encodedData)
        fs.writeFile("result.xml", encodedData, () => { })
    })
    }
//decode(buff)
exports.Decoder = decode
