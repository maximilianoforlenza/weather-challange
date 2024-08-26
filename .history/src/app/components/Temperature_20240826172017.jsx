"use client";
import { useState } from "react";

import { getTemperatureUnit } from "@/app/helpers/helpers";

import Switch from "./Switch";

export default function Temperature({ weather }) {
  const [temperature, setTemperature] = useState("f");
  return (
    <div className="flex flex-col gap-y-12">
      <Switch
        value={temperature}
        onChange={() => setTemperature(temperature === "c" ? "f" : "c")}
        label={temperature === "c" ? "Farenhein" : "Celcius"}
      />
      <div className="flex">
        <p className="text-black">
          {weather.temperature}
          {getTemperatureUnit(temperature, weather.temperature)}
        </p>
      </div>
    </div>
  );
}
