const fetch = require('node-fetch');

const roadster = (data) => ({
  name: data.name,
  launch_date_utc: data.launch_date_utc,
  launch_mass_kg: data.launch_mass_kg,
  speed_kph: data.speed_kph,
  earth_distance_km: data.earth_distance_km.toFixed(0),
  mars_distance_km: data.mars_distance_km.toFixed(0),
  details: data.details
});


const getRoadsterData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/roadster');
    if (!response.ok) {
      throw new Error(`Error with roadster response ${response.status}`);
    }
    const data = await response.json();
    return roadster(data);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

module.exports = {
  getRoadsterData,
}