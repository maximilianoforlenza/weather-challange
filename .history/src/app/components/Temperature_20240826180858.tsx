"use client";
import { useState } from "react";

import { getTemperatureUnit } from "@/app/helpers/helpers";
import { Weather, Unit } from "@/app/lib/definitions";

import Switch from "./Switch";

export default function Temperature({ weather }: { weather: Weather }) {
  const [unit, setUnit] = useState("f");
  return (
    <div className="flex flex-col gap-y-10">
      <Switch
        value={unit}
        onChange={() => setUnit(unit === "c" ? "f" : "c")}
        label={unit === "c" ? "Celsius" : "Fahrenheit"}
      />
      <div className="flex">
        <p className="text-black">
          {weather.temperature}
          {getTemperatureUnit(unit, weather.temperature)}
        </p>
      </div>
    </div>
  );
}
