const iconv = require('iconv-lite');
const fs = require("fs");

fs.readFile("win.xml", null, (err, data) => { 
    if(err) { 
        console.log(err)
        return
    }

    const encodedData = iconv.encode(iconv.decode(data, 'win1251'), 'utf8')
    console.log(encodedData)
    fs.writeFile("result_filename.xml", encodedData, () => { })
})