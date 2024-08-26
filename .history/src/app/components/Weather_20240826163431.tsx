import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases, getTemperatureUnit } from "@/app/helpers/helpers";
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
      <p key={currentTitle} style={{ color }} className="text-3xl font-bold">
        {currentTitle}
      </p>
    ) : (
      <p key={currentTitle} className="text-black font-bold text-3xl">
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
        <div className="flex text-end">
          {WeatherIcon && <WeatherIcon />}
          <p className="text-black text-end">
            {weather.temperature}
            {getTemperatureUnit("f", weather.temperature)}
          </p>
        </div>
        <div className="flex gap-1">
          {getTitle(phrase.title, phrase.highlight?.[0], phrase.color)}
        </div>
        <p className="text-black text-base">{phrase?.subtitle}</p>
      </div>
    )
  );
}
