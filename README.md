# Reading Writing files in nodejs

# Reading from a file
Syncronous method - Blocking Code
Blocks the flow of the code
var sampleTxt = fs.readFileSync('sample.txt', 'utf8');

# Writing to a file
Syncronous method
fs.writeFileSync('newFile.txt', sampleTxt);

---

# Reading and Writing from a file
Asyncronous method - Non Blocking Code
Requires a callback method
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('newFileAsync.txt', data, (err) => {
        if (err) throw err;
        console.log('File written successfully..');
       });
})
