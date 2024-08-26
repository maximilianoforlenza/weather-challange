import phraseJson from "./phrases.json";

export const getTemperatureUnit = (unit, temperature) => {
  const hasTemperature = temperature !== undefined;
  return unit === "f"
    ? `${hasTemperature ? Math.round((temperature * 9) / 5 + 32) : ""} °F`
    : `${hasTemperature ? Math.round(temperature) : ""} °C`;
};

/**
 * getCondition
 * @param {string} icon - The icon from Data
 * @returns {string} Same string with Day / Night removed
 */

const getCondition = icon => icon && icon.replace(/(Day)|(Night)/gi, "").trim();

/**
 * getPhrases
 * @param {string} icon - The icon from Data
 * @param {number} temperature - Temperature in Celcius
 * @returns {array} An array of phrases.
 */

export const getPhrases = (icon, temperature) => {
  const condition = getCondition(icon);
  return phraseJson.phrases.filter(
    p =>
      (p.condition === undefined || p.condition === condition) &&
      (p.min === undefined || p.min < temperature) &&
      (p.max === undefined || p.max > temperature)
  );
};
