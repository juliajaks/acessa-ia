import type { Block } from "../data/types";

function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-text-secondary leading-relaxed text-[1.05rem]">
      {parseInline(text)}
    </p>
  );
}

function Blockquote({ text }: { text: string }) {
  return (
    <blockquote className="border-l-4 border-primary/60 bg-primary/5 rounded-r-xl px-5 py-4 my-1">
      <p className="text-primary-light italic leading-relaxed">{parseInline(text)}</p>
    </blockquote>
  );
}

function Subheading({ text }: { text: string }) {
  return (
    <p className="text-white font-syne font-semibold text-lg mt-2">
      {text}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
          <span className="text-primary-light mt-1 shrink-0">→</span>
          <span>{parseInline(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function BoldHeaderList({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="space-y-4">
      {items.map(([title, desc], i) => (
        <div key={i} className="flex gap-3">
          <span className="text-primary-light mt-1 shrink-0">→</span>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-white font-semibold">{title}: </strong>
            {parseInline(desc)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (typeof block === "string") return <Paragraph key={i} text={block} />;
        if ("q" in block) return <Blockquote key={i} text={block.q} />;
        if ("h" in block) return <Subheading key={i} text={block.h} />;
        if ("li" in block) return <BulletList key={i} items={block.li} />;
        if ("bh" in block) return <BoldHeaderList key={i} items={block.bh} />;
        return null;
      })}
    </div>
  );
}
