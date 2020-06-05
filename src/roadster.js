const fetch = require('node-fetch');

class Roadster {
  async getRoadsterData() {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/roadster');
      if (!response.ok) {
        throw new Error(`Error with roadster response ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      return 'Something went badly wrong';
    }
  }
}


module.exports = {
  Roadster,
};
