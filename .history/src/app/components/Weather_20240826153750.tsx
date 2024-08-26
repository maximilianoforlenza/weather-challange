import { getRandomZipcode } from "../api/api.ts";

export default async function Weather() {
  const zipCode = getRandomZipcode();
  return <p>Weather</p>;
}
