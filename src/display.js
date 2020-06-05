const readlineSync = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet')



class Display {
  static menu() {
    console.log(chalk.bold.greenBright('Please select from the following options:'));
    console.log(chalk.cyan('0. Exit'));
    console.log(chalk.cyan('1. View Elon\'s roadster info'));
    console.log(chalk.cyan('2. View future launches'));
    console.log(chalk.cyan('3. View one past launches'));
  }

  static header() {
    return figlet.textSync('SpaceX App', function(err, data) {
      if (err) {
        console.log(chalk.red('Something went wrong'));
        console.dir(err);
      }
      console.log(data);
    });
  }

  static getOption() {
    return readlineSync.questionInt('> ');
  }

  static getFlightNum() {
    return readlineSync.question('flight number: ');
  }

  static roadster(data){
    console.log(chalk.bold.greenBright("Name: ") + data.name);
    console.log(chalk.bold.greenBright("Launch Date: ") + data.launch_date_utc);
    console.log(chalk.bold.greenBright("Launch Mass: ") + data.launch_mass_kg + "kg");
    console.log(chalk.bold.greenBright("Speed: ") + data.speed_kph.toFixed(0) + "kph");
    console.log(chalk.bold.greenBright("Distance from Earth: ") + data.earth_distance_km.toFixed(0) + "km");
    console.log(chalk.bold.greenBright("Distance to Mar: ") + data.mars_distance_km.toFixed(0) + "km");
    console.log(chalk.bold.greenBright("Description: ") + data.details);
  };

  static exit() {
    console.log(chalk.bold.greenBright('Thanks for using our App!'))
  }
}

module.exports = {
  Display,
};
