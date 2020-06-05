const { Display } = require('./src/display');
const { Roadster } = require('./src/roadster.js');
const fetchLaunches = require('./src/fetch-a-launch.js');
const getLaunch = require('./src/fetch-a-launch.js');

// require('./src/fetch-a-launch.js');
// require('./src/fetch-a-launch.js');

 
const app = async () => {
  let start = true;
  const request = new Roadster();
  const roadsterData = await request.getRoadsterData();
  
  const flight = (data) => ({
  flight_number: data.flight_number,
  mission_name: data.mission_name,
  launch_date: data.launch_date_local.slice(0, 10),
  rocket_name: data.rocket.rocket_name,
  rocket_type: data.rocket.rocket_type,
  launch_success: data.launch_success,
  details: data.details,
});

  const future = await fetchLaunches.futureLaunches();
  

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
        }
        break;
      case 2:
        // fetchLaunches.futureLaunches();
        future.forEach((launch) => {
          console.log(flight(launch));
        });
        // console.log(future);
        break;
      case 3:
        const flightNum = Display.getFlightNum()
        // console.log(fetchLaunches.getLaunch(flightNum));
        const pastLaunch = await fetchLaunches.getLaunch(flightNum);
        console.log(flight(pastLaunch));
        break;
      default:
        console.log('Invalid Option');
    }

  }
};

app();
