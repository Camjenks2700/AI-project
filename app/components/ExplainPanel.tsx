"use client";

import { FormLine } from "../lib/lines";

type ExplainPanelProps = {
  line: FormLine;
  value: string | number | boolean | undefined;
  onClose: () => void;
};

export default function ExplainPanel({ line, value, onClose }: ExplainPanelProps) {
  const prompt = `You are a tax tutor. Explain how to fill 2025 Form 1040 ${line.line} (${line.label}).\n\nCurrent user entries: ${
    value ?? "(blank)"
  }.\n\nExplain what documents feed this line, how to compute it for 2025, and common mistakes to avoid. Ask clarifying questions if needed.`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
  };

  return (
    <>
      <div className="explain-overlay" onClick={onClose} />
      <aside className="explain-panel">
        <div className="controls" style={{ justifyContent: "space-between" }}>
          <h2>{line.line}</h2>
          <button className="secondary" onClick={onClose}>
            Close
          </button>
        </div>
        <p>{line.explanation}</p>
        <h3>Common traps</h3>
        <ul>
          {line.traps.map((trap) => (
            <li key={trap}>{trap}</li>
          ))}
        </ul>
        <h3>Where it comes from</h3>
        <p>{line.source}</p>
        <div className="controls">
          <button onClick={handleCopy}>Copy AI Study Prompt</button>
        </div>
      </aside>
    </>
  );
}
