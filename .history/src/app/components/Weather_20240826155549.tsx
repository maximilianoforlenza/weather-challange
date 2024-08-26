import weatherAPI from "../utils/weatherAPI";

async function getCurrentWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

export default async function Weather() {
    const 
  return <p>Weather</p>;
}
