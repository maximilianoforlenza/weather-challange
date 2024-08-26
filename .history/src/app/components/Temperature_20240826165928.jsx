export default function Temperature() {
  return (
    <p className="text-black">
      {weather.temperature}
      {getTemperatureUnit("f", weather.temperature)}
    </p>
  );
}
