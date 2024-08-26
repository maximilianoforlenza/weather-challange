import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases, getTemperatureUnit } from "@/app/helpers/helpers";
import * as Icons from "@/app/icons";

import Phrase from "./Phrase";
import Temperature from "./Temperature";

async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);
  const WeatherIcon = Icons[weather.icon];
  return (
    phrase && (
      <div>
        <div className="flex items-end">
          {WeatherIcon && <WeatherIcon />}
          <p className="text-black">
            {weather.temperature}
            {getTemperatureUnit("f", weather.temperature)}
          </p>
        </div>
        <Phrase phrase={phrase} />
      </div>
    )
  );
}
