import weatherAPI from "../utils/weatherAPI";

export default async function Weather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  return <p>Weather</p>;
}
