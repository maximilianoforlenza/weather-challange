import weatherAPI from "../utils/weatherAPI";

export default async function Weather() {
  const { get } = weatherAPI;
  return <p>Weather</p>;
}
