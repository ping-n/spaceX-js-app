const { Display } = require('./src/display');
const { Roadster } = require('./src/roadster.js');
const fetchLaunches = require('./src/fetch-a-launch.js');
const getLaunch = require('./src/fetch-a-launch.js');

// require('./src/fetch-a-launch.js');
// require('./src/fetch-a-launch.js');


const app = async () => {

  let start = true
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
    Display.menu();
    const choice = Display.getOption();

    switch (choice) {
      case 0:
        console.log('Thank you for using our App');
        start = false
        break;
      case 1:
        console.log(roadsterData)
        break
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
}

app()
