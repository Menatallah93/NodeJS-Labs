////////// Q5-A Read data from data.json as sync  /////////////////
// var fs = require('fs');

// try {
//   var data = fs.readFileSync('data.json');
//   var jsonData = JSON.parse(data);
//   console.log(jsonData);
// } catch (err) {
//   console.error(err);
// }

////////// Q5-B Read data from data.json as async  /////////////////
// var fs = require('fs');

// async function readData() {
//   try {
//     var data = await fs.promises.readFile('data.json', 'utf8');
//     var jsonData = JSON.parse(data);
//     console.log(jsonData);
//   } catch (error) {
//     console.error(error);
//   }
// }

// readData();

////////// Q6- write inside file info /////////////////
// var fs = require('fs');

// fs.writeFile('info.txt', 'hello iti', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved Successfully!');
// });

