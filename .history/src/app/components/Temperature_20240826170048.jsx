"use client";
import { useState } from "react";

import { getTemperatureUnit } from "@/app/helpers/helpers";

export default function Temperature({ weather }) {
  const [temperature, setTemperature] = useState("f");
  return (
    <p className="text-black">
      {weather.temperature}
      {getTemperatureUnit("f", weather.temperature)}
    </p>
  );
}
