import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  wrap?: boolean;
}

export default function CodeBlock({ code, language = 'txt', wrap = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="relative rounded-lg border border-white/10 bg-black/60 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/5">
        <span className="text-xs uppercase tracking-wide text-white/60">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 focus-accent"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5"/></svg>
              Copied
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className={`m-0 p-4 text-sm text-white/90 font-jetbrains ${wrap ? 'whitespace-pre-wrap break-words' : 'overflow-auto'}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

