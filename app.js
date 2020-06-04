const { Display } = require('./src/display');
const getRoadsterData = require('./src/roadster');


const app = async () => {

  let start = true

  while (start) {
    Display.menu;
    const choice = Display.getOption();

    switch (choice) {
      case 0:
        start = false
        break;
      case 1: 
        getRoadsterData();
        break
      case 2:
        futureLaunches();
        break;
      case 3:
        const flightNum = readlineSync.question('flight number: ')
        getLaunch(flightNum);
        break;
      default:
        console.log('Invalid Option');
    }
  }
}

app()