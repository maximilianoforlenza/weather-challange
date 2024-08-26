import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";
import * as Icons from "@/app/icons";

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
      <p key={currentTitle} className="text-black font-bold">
        {currentTitle}
      </p>
    )
  );
};

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);
  const WeatherIcon = Icons[weather.icon];
  return (
    phrase && (
      <div>
        <div>
        {WeatherIcon && <WeatherIcon />}
        </div>
        <div className="flex gap-1">
          {getTitle(phrase.title, phrase.highlight?.[0], phrase.color)}
        </div>
        <p className="text-black">{phrase?.subtitle}</p>
      </div>
    )
  );
}
