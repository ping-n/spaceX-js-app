const readlineSync = require("readline-sync");
const fetch = require("node-fetch");

const options = ['view Roadser distance to Mars', 'view a past launch info'];
const index = readlineSync.keyInSelect(options, "What are you up to?");

console.log(options[1]);

switch(index) {
  case -1: 
    process.exit();
  case 1: 
    console.log('roadster');
  case 2:
    // getLaunch();
    console.log('2');
}
 

// const getLaunch = fetch(`https://api.spacexdata.com/v3/launches/60`)
// getLaunch
//   .then((response) => {
//     return response.json()
//   })
//   .then ((data) => {
//     console.log(data)
//   })