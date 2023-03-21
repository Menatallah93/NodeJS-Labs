var fs = require('fs');

fs.mkdir('myDirectory', (err) => {
  if (err) throw err;
  console.log('Directory created Successfully!');
});