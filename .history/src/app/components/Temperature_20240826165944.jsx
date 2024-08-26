import { getPhrases, getTemperatureUnit } from "@/app/helpers/helpers";


export default function Temperature({weather}) {
  return (
    <p className="text-black">
      {weather.temperature}
      {getTemperatureUnit("f", weather.temperature)}
    </p>
  );
}
