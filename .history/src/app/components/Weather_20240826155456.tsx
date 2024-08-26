import weatherAPI from "../utils/weatherAPI";

export default async function Weather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  return <p>Weather</p>;
}
