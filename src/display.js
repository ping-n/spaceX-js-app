const readlineSync = require('readline-sync');

class Display {
  static menu() {
    console.log('Please select from the following options:');
    console.log('0. Exit');
    console.log('1. View Elon\'s roadster info');
    console.log('2. View future launches');
    console.log('3. View one past launches');
  }

  static getOption() {
    return readlineSync.questionInt('> ');
  }
}

module.exports = {
  Display,
};
