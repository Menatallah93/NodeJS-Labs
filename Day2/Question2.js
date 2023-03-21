//////////////// 2- read a file line by line //////////////////
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: fs.createReadStream('data.json'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(line);
});