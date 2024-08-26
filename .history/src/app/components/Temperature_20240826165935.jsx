
export default function Temperature({weather}) {
  return (
    <p className="text-black">
      {weather.temperature}
      {getTemperatureUnit("f", weather.temperature)}
    </p>
  );
}
