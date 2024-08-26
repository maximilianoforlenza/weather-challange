import { Weather } from "@/app/lib/definitions";

import dataRaw from "./data.json";

type WeatherWithZipCode = {
  [key: string]: Weather;
};

const createWeatherAPI = (data: WeatherWithZipCode) => {
  const getRandomZipcode = () => {
    const keys = Object.keys(data);
    return keys[Math.floor(Math.random() * keys.length)];
  };
  return {
    getCurrentWeather: async (zipcode: string) => {
      return zipcode ? data[zipcode] : data[getRandomZipcode()];
    },
    getRandomZipcode,
    getZipcodes: () => {
      return Object.keys(data);
    },
  };
};

export default createWeatherAPI(dataRaw);
