import weatherAPI from "../utils/weatherAPI";

async function getCurrentWeather() {
    const { getRandomZipcode, getCurrentWeather } = weatherAPI;
    const zipCode = getRandomZipcode();
    const weather = await getCurrentWeather(zipCode);
    console.log(weather);
    
}

export default async function Weather() {
  return <p>Weather</p>;
}
