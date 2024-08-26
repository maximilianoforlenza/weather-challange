import phraseJson from "./phrases.json";

type Unit = 'c'

export const getTemperatureUnit = (unit, temperature) => {
  const hasTemperature = temperature !== undefined;
  return unit === "f"
    ? `${hasTemperature ? Math.round((temperature * 9) / 5 + 32) : ""} °F`
    : `${hasTemperature ? Math.round(temperature) : ""} °C`;
};

const getCondition = icon => icon && icon.replace(/(Day)|(Night)/gi, "").trim();

export const getPhrases = (icon, temperature) => {
  const condition = getCondition(icon);
  return phraseJson.phrases.filter(
    p =>
      (p.condition === undefined || p.condition === condition) &&
      (p.min === undefined || p.min < temperature) &&
      (p.max === undefined || p.max > temperature)
  );
};
