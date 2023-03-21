////////// Q3- Renaming the file /////////////////

var fs = require('fs');

fs.rename('test.txt', 'info.txt', (err) => {
  if (err) throw err;
  console.log('File renamed Successfully!');
});


/////////////// Q4- Remove the file /////////////////
// var fs = require('fs');

// fs.unlink('info.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted Successfully!');
// });
