const { Display } = require('./src/display');
const { Roadster } = require('./src/roadster.js');
const futureLaunches = require('./src/fetch-a-launch.js');
const getLaunch = require('./src/fetch-a-launch.js');



const app = async () => {

  let start = true
  const request = new Roadster();
  const roadsterData = await request.getRoadsterData();

  while (start) {
    Display.menu();
    const choice = Display.getOption();

    switch (choice) {
      case 0:
        console.log('Thank you for using our App');
        start = false
        break;
      case 1:
        Display.roadster(roadsterData)
        break
      case 2:
        futureLaunches();
        break;
      case 3:
        Display.getFlightNum
        getLaunch(flightNum);
        break;
      default:
        console.log('Invalid Option');
    }
  }
}

app()