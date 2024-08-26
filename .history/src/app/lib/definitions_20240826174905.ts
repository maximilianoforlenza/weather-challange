import * as Icons from "@/app/icons";

export type Icon = keyof typeof Icons;

export type Phrase = {
    title: string;
    highlight: string[];
    color: string;
  };
  
export  type Subtitle = { subtitle: string };
  
  type PhraseWithSubtitle = Phrase & Subtitle;
