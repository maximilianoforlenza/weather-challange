import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";

async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);

  const getTitle = title => title.split('|').join('')

  console.log(phrase);
  return (
    <div>
      <p>{phrase?.title}</p>
      <p>{phrase?.subtitle}</p>
    </div>
  );
}
