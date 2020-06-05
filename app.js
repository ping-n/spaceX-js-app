const { Display } = require('./src/display');
const { Roadster } = require('./src/roadster.js');
const futureLaunches = require('./src/fetch-a-launch.js');
const getLaunch = require('./src/fetch-a-launch.js');


 
const app = async () => {
  let start = true;
  const request = new Roadster();
  const roadsterData = await request.getRoadsterData();
  while (start) {
    console.log(Display.header());
    Display.menu();
    const choice = Display.getOption();
    
    switch (choice) {
      case 0:
        Display.exit();
        start = false;
        break;
      case 1:
        Display.roadsterMenu(roadsterData)
        const choice2 = Display.getOption();
        switch (choice2) {
          case 0:
            Display.menu();
            break;
          case 1:
            Display.roadsterLaunch(roadsterData);
            break;
          case 2: 
            Display.roadsterDistance(roadsterData);
            break;
          case 3:
            Display.roadsterSpeed(roadsterData);
            break;
          default:
            console.log('Invalid Option');
        }
      case 2:
        futureLaunches();
        break;
      case 3:
        Display.getFlightNum;
        getLaunch(flightNum);
        break;
      default:
        console.log('Invalid Option');
    };
  }
};

app();
