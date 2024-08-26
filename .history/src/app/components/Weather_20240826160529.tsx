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

  const getTitle = (title?: string, highlight?: string) =>
    title ? title.split("|").map(currentTitle => currentTitle === highlight ? <p className="text-cyan-500">{text}</p> : <p>{currentTitle}</p>).join(" ") : "";

  console.log(phrase);
  return (
    <div>
      <p>{getTitle(phrase?.title, phrase?.highlight?.[0])}</p>
      <p>{phrase?.subtitle}</p>
    </div>
  );
}
