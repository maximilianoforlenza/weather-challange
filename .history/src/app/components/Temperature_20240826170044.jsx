"use client";

import { getTemperatureUnit } from "@/app/helpers/helpers";
import { useState } from "react";

export default function Temperature({ weather }) {
  const [temperature, setTemperature] = useState("f");
  return (
    <p className="text-black">
      {weather.temperature}
      {getTemperatureUnit("f", weather.temperature)}
    </p>
  );
}
