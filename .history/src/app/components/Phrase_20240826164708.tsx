export default function Phrase() {
  return (
    <>
      <div className="flex gap-1">
        {getTitle(phrase.title, phrase.highlight?.[0], phrase.color)}
      </div>
      <p className="text-black text-base">{phrase?.subtitle}</p>
    </>
  );
}
