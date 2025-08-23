import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-white/10">
      {items.map((it, idx) => (
        <FAQItem key={idx} q={it.q} a={it.a} />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-medium">{q}</span>
        <svg
          className={`h-5 w-5 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="mt-2 text-white/75 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

