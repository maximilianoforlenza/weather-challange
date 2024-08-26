import weatherAPI from "../utils/weatherAPI";



export default async function Weather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  console.log(weather);
  return <p>Weather</p>;
}
