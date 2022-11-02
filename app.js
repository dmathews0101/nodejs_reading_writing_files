var fs = require('fs');

// Reading from a file
// Syncronous method - Blocking Code
var sampleTxt = fs.readFileSync('sample.txt', 'utf8');
console.log(sampleTxt);

// Writing to a file
// Syncronous method - Non Blocking Code
fs.writeFileSync('newFile.txt', sampleTxt);

// Reading from a file - Asyncronous
fs.readFile('sample.txt', 'utf8', function(err, data){
    // Writing to a file - Asyncronous
    console.log(data);
    fs.writeFile('newFileAsync.txt', data, (err) => {
        if (err) throw err;
        console.log('File written successfully..');
       });
})
