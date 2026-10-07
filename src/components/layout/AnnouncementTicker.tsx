const tickerItems = [
  { label: "ZEYLUN × UK", emphasized: true },
  { label: "NOW WORKING WITH UK BUSINESSES" },
  { label: "WEB DEVELOPMENT" },
  { label: "CUSTOM SOFTWARE" },
  { label: "AI & AUTOMATION" },
  { label: "LET'S BUILD SOMETHING THAT SCALES" },
];

function TickerSequence() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
      {Array.from({ length: 4 }, (_, repetition) => (
        <div key={repetition} className="flex shrink-0 items-center gap-6 sm:gap-8">
          {tickerItems.map((item) => (
            <span
              key={item.label}
              className={item.emphasized ? "font-semibold text-zinc-100" : "text-zinc-400"}
            >
              {item.label}
              <span className="ml-6 text-zinc-600 sm:ml-8">•</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function AnnouncementTicker() {
  const announcement = tickerItems.map((item) => item.label).join(" • ");

  return (
    <aside
      aria-label="Zeylun announcement"
      className="flex h-8 w-full max-w-full items-center overflow-hidden border-b border-white/5 bg-zinc-950 sm:h-9"
    >
      <p className="sr-only">{announcement}</p>
      <div
        aria-hidden="true"
        className="announcement-ticker-track font-sora text-[10px] uppercase leading-none tracking-[0.18em] sm:text-[11px]"
      >
        <TickerSequence />
        <TickerSequence />
      </div>
    </aside>
  );
}
