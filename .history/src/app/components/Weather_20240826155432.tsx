import weatherAPI from "../utils/weatherAPI";

export default async function Weather() {
  const { getRandomZipcode } = weatherAPI;
  return <p>Weather</p>;
}
