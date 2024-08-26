import * as Icons from "@/app/icons";

export type Icon = keyof typeof Icons;

type Phrase = {
    title: string;
    highlight: string[];
    color: string;
  };
  
  type Subtitle = { subtitle: string };
  
  type PhraseWithSubtitle = Phrase & Subtitle;
