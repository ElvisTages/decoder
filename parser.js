const iconv = require('iconv-lite');
const fs = require("fs");

// let buff = "response_from_DFSS.bin"

function decode(buff){
fs.readFile(buff, null, (err, data) => { 
    if(err) { 
        console.log(err)
        return
    }

    const encodedData = iconv.encode(iconv.decode(data, 'win1251'), 'utf8')
    console.log(encodedData)
    fs.writeFile(buff, encodedData, () => { })
})
}
//decode(buff)
exports.Decoder = decode
