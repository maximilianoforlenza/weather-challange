import { Phrase as PhraseType, PhraseWithSubtitle } from "../lib/definitions";

function Title({ title, highlight, color }: Phrase) {
  return title.split("|").map((currentTitle) =>
    currentTitle === highlight[0] ? (
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

export default function Phrase({ phrase }: { phrase: PhraseWithSubtitle }) {
  return (
    <>
      <div className="flex gap-1">
        <Title {...phrase} />
      </div>
      <p className="text-black text-base">{phrase.subtitle}</p>
    </>
  );
}