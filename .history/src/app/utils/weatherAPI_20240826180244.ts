import { Weather } from "@/app/lib/definitions";

import dataRaw from "./data.json";

type WeatherWithZipCode = {
  
}

const createWeatherAPI = (data: Weather) => {
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
