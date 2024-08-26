"use client";
import { useState } from "react";

import { getTemperatureUnit } from "@/app/helpers/helpers";

import Switch from "./Switch";

export default function Temperature({ weather }) {
  const [temperature, setTemperature] = useState("f");
  return (
    <>
      <Switch />
      <p className="text-black">
        {weather.temperature}
        {getTemperatureUnit(temperature, weather.temperature)}
      </p>
    </>
  );
}
