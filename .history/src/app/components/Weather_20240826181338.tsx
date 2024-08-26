import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";
import * as Icons from "@/app/icons";

import Icon from "./Icon";
import Phrase from "./Phrase";
import Temperature from "./Temperature";
import { Suspense } from "react";

async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);
  return (
    phrase && (
      <Suspense>
        <div className="flex items-end">
          <Icon icon={weather.icon} />
          <Temperature weather={weather} />
        </div>
        <Phrase phrase={phrase} />
      </Suspense>
    )
  );
}
