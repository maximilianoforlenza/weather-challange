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
  [key: string]: {
    timezone: string;
    icon: keyof typeof Icons;
    temperature: number;
  };
};
