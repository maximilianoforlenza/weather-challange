import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";


async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

const getTitle = (title: string, highlight: string, color: string) => {
  return title.split("|").map((currentTitle) =>
    currentTitle === highlight ? (
      <p key={currentTitle} style={{ color }}>
        {currentTitle}
      </p>
    ) : (
      <p key={currentTitle}>{currentTitle}</p>
    )
  );
};

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);

  return (
    phrase && (
      <div>
        Icons[weather.icon]
        <div className="flex gap-1">
          {getTitle(phrase.title, phrase.highlight?.[0], phrase.color)}
        </div>
        <p>{phrase?.subtitle}</p>
      </div>
    )
  );
}
