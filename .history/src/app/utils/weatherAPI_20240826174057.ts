import dataRaw from "./data.json";
import * as Icons from "@/app/icons";

interface Data {
  [key: string]: {
    timezone: string;
    icon: keyof typeof Icons;
    temperature: number;
  };
}

const createWeatherAPI = (data: Data) => {
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
