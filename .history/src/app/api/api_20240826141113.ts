import dataRaw from "./data.json";

export interface Welcome {
  timezone:    string;
  icon:        string;
  temperature: number;
}


const createWeatherAPI = (data) => {
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
