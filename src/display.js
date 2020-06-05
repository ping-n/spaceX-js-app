const readlineSync = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet')



class Display {
  static menu() {
    console.log(chalk.hex('#6495ed').bold('Please select from the following options:'));
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
  static roadsterMenu() {
    console.log(chalk.hex('#6495ed').bold('Please select from the following options:'));
    console.log(chalk.cyan('0. Back to main menu'));
    console.log(chalk.cyan('1. Launch info'));
    console.log(chalk.cyan('2. Distance from planets'));
    console.log(chalk.cyan('3. Speed of roadster'));
  }
  static getOption() {
    return readlineSync.questionInt(chalk.bold.greenBright('> '));
  }

  static getFlightNum() {
    return readlineSync.question(chalk.hex('#6495ed').bold('flight number: '));
  }
  static roadsterLaunch(data){
    console.log(chalk.bold.whiteBright("Name: ") + chalk.hex('#6495ed').bold(data.name));
    console.log(chalk.bold.whiteBright("Launch Date: ") + chalk.yellowBright(data.launch_date_utc.slice(0, 16)));
    console.log(chalk.bold.whiteBright("Launch Mass: ") + chalk.yellowBright(data.launch_mass_kg + "kg"));
    console.log(chalk.bold.whiteBright("Description: ") + chalk.greenBright(data.details));
  }
  static roadsterDistance(data){
    console.log(chalk.bold.whiteBright("Distance from Earth: ") + chalk.yellowBright(data.earth_distance_km.toFixed(0) + "km"));
    console.log(chalk.bold.whiteBright("Distance to Mar: ") + chalk.yellowBright(data.mars_distance_km.toFixed(0) + "km"));
  }
  static roadsterSpeed(data){
    console.log(chalk.bold.whiteBright("Speed: ") + chalk.yellowBright(data.speed_kph.toFixed(0) + "kph"));
  }

  static exit() {
    console.log(chalk.hex('#6495ed').bold('Thanks for using our App!'))
  }
}

module.exports = {
  Display,
};
