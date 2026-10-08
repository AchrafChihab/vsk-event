import { marqueeItems as defaultItems } from '../data/homeContent';

function MarqueeSequence({ items, hidden = false }) {
  return (
    <span className="marquee-sequence" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}<span className="marquee-symbol" aria-hidden="true">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee({ items = defaultItems }) {
  return (
    <section className="marquee-strip" aria-label={items.join(', ')}>
      <div className="marquee-track">
        <MarqueeSequence items={items} hidden />
        <MarqueeSequence items={items} hidden />
      </div>
    </section>
  );
}
