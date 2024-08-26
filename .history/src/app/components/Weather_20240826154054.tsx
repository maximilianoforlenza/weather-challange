import createWeatherAPI from "../api/api";

export default async function Weather() {
  const zipCode = createWeatherAPI();
  return <p>Weather</p>;
}
