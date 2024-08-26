function Title({ title: string, highlight: string, color: string }) {
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

export default function Phrase({ phrase }: {subTitle: string}) {
  return (
    <>
      <div className="flex gap-1">
        <Title {...phrase} />
      </div>
      <p className="text-black text-base">{phrase?.subtitle}</p>
    </>
  );
}
