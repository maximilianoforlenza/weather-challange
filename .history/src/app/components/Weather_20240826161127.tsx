import weatherAPI from "@/app/utils/weatherAPI";
import { getPhrases } from "@/app/helpers/helpers";

async function getWeather() {
  const { getRandomZipcode, getCurrentWeather } = weatherAPI;
  const zipCode = getRandomZipcode();
  const weather = await getCurrentWeather(zipCode);
  return { weather };
}

type Color =
  | `#${string}${string}${string}${string}${string}${string}`
  | undefined;

export default async function Weather() {
  const { weather } = await getWeather();
  const phrase = getPhrases(weather.icon, weather.temperature);

  const getTitle = (title: string, highlight: string, color: Color) => {
    console.log(color);
    return title.split("|").map((currentTitle) =>
      currentTitle === highlight ? (
        <p key={currentTitle} class={`text-[${color}]`}>
          {currentTitle}
        </p>
      ) : (
        <p key={currentTitle}>{currentTitle}</p>
      )
    );
  };

  console.log(phrase);
  return (
    phrase && (
      <div>
        <div className="flex gap-1">
          {getTitle(phrase.title, phrase.highlight?.[0], phrase.color)}
        </div>
        <p>{phrase?.subtitle}</p>
      </div>
    )
  );
}
