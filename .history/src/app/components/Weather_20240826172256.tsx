import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";
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
      <>
        <div className="flex items-end">
          {WeatherIcon && <WeatherIcon />}
          <Temperature weather={weather} />
        </div>
        <Phrase phrase={phrase} />
      </>
    )
  );
}