import weatherAPI from "../utils/weatherAPI";
import weatherAPI from "../utils/weatherAPI";

async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  console.log(zipCode);
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

export default async function Weather() {
  const { weather } = await getWeather();
  console.log(weather);
  return <p>Weather</p>;
}
