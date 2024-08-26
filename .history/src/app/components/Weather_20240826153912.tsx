import { getRandomZipcode } from "../api/api";

export default async function Weather() {
  const zipCode = getRandomZipcode();
  return <p>Weather</p>;
}
