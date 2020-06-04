const readlineSync = require("readline-sync");

class Display {

  static menu() {
    console.log('Please select from the following options:');
    console.log('1. Roadster distance from Mars');
    console.log('2. View future launches');
    console.log('3. View one past launches');
  }

  static getOption() {
    return readlineSync.questionInt('> ')
  }
}

module.exports = {
  Display,
};