import * as Icons from "@/app/icons";

export type Icon = keyof typeof Icons;

export type Phrase = {
  title: string;
  highlight: string[];
  color: string;
};

export type Subtitle = { subtitle: string };

export type PhraseWithSubtitle = Phrase & Subtitle;

export type Unit = "c" | "f";

export type Weather = {
  timezone: string;
  icon: Icon;
  temperature: number;
};

export type WeatherWithZipCode = {
  [key: string]: Weather;
};
