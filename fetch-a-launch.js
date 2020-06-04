const readlineSync = require("readline-sync");
const fetch = require("node-fetch");


const getLaunch = async(flightNum) => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v3/launches/${flightNum}`);
    const data  = await response.json();
    console.log(data);
  } catch(err) {
    console.log(err)
  }
}

const options = [' Roadster distance from Mars', 'View future launches', 'View one past launch'];
const index = readlineSync.keyInSelect(options, "What are you up to?") + 1;


switch(index) {
  case 0: 
    console.log('exit');
    process.exit();
  case 1: 
    console.log('roadster');
    break;
  case 2:
    // getLaunch();
    console.log('future');
    break;
  case 3:
    const flightNum = readlineSync.question('flight number: ')
    getLaunch(flightNum);
    break;
}
 
