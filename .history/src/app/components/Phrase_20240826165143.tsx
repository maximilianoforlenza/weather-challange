function Title({ title, highlight, color }: Phrase) {
  return title.split("|").map((currentTitle) =>
    currentTitle === highlight ? (
      <p key={currentTitle} style={{ color }} className="text-3xl font-bold">
        {currentTitle}
      </p>
    ) : (
      <p key={currentTitle} className="text-black font-bold text-3xl">
        {currentTitle}
      </p>
    )
  );
}

type Phrase = {
  subTitle: string;
  title: string;
  hightlight: string[];
  color: string;
};

type Subtitle = {subTitle: string}

type PhraseWithSubtitle = Phrase & Subtitle;

export default function Phrase({ phrase }: {phrase: Phrase}) {
  return (
    <>
      <div className="flex gap-1">
        <Title {...phrase} />
      </div>
      <p className="text-black text-base">{phrase?.subtitle}</p>
    </>
  );
}
