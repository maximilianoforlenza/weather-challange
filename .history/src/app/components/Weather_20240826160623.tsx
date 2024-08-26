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
    title
      ? title.split("|").map((currentTitle) =>
          currentTitle === highlight ? (
            <p key={currentTitle} className="text-cyan-500">
              {currentTitle}
            </p>
          ) : (
            <p key={currentTitle}>{currentTitle}</p>
          )
        )
      : "";

  console.log(phrase);
  return (
    <div>
      <di>{getTitle(phrase?.title, phrase?.highlight?.[0])}</p>
      <p>{phrase?.subtitle}</p>
    </div>
  );
}
