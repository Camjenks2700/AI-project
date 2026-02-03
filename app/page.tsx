"use client";

import { useMemo, useState } from "react";
import ExplainPanel from "./components/ExplainPanel";
import { formLines, exampleReturn, FormLine } from "./lib/lines";
import { useLocalStorage } from "./hooks/useLocalStorage";

const STORAGE_KEY = "form-1040-values";

function formatValue(value: string | number | boolean | undefined) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (value === undefined || value === "") return "";
  return value;
}

export default function HomePage() {
  const { storedValue, setStoredValue, ready } = useLocalStorage<Record<string, any>>(
    STORAGE_KEY,
    {}
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [explainLine, setExplainLine] = useState<FormLine | null>(null);
  const [jumpQuery, setJumpQuery] = useState("");

  const currentLine = formLines[currentIndex];
  const progress = Math.round(((currentIndex + 1) / formLines.length) * 100);
  const sectionList = useMemo(
    () => Array.from(new Set(formLines.map((line) => line.section))),
    []
  );

  const updateValue = (id: string, value: string | number | boolean) => {
    setStoredValue({
      ...storedValue,
      [id]: value
    });
  };

  const handleJump = () => {
    if (!jumpQuery) return;
    const match = formLines.findIndex((line) =>
      `${line.line} ${line.label}`.toLowerCase().includes(jumpQuery.toLowerCase())
    );
    if (match >= 0) {
      setCurrentIndex(match);
    }
  };

  const handleExample = () => {
    setStoredValue({
      ...storedValue,
      ...exampleReturn
    });
  };

  if (!ready) {
    return (
      <div className="card">
        <h1>2025 Form 1040 Line-by-Line Wizard</h1>
        <p>Loading your saved entries...</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="nav">
        <a href="/">Wizard</a>
        <a href="/form-view">Form View</a>
      </nav>
      <div className="card" style={{ marginBottom: 20 }}>
        <h1>2025 Form 1040 Line-by-Line Wizard</h1>
        <p>
          Walk through every line of the 2025 Form 1040 in order. Entries are
          stored locally in your browser.
        </p>
        <div className="controls">
          <input
            list="line-options"
            placeholder="Jump to line 7, Line 15, or 'dependents'"
            value={jumpQuery}
            onChange={(event) => setJumpQuery(event.target.value)}
          />
          <datalist id="line-options">
            {formLines.map((line) => (
              <option key={line.id} value={`${line.line} ${line.label}`} />
            ))}
          </datalist>
          <button className="secondary" onClick={handleJump}>
            Jump to line
          </button>
          <button className="ghost" onClick={handleExample}>
            Load Example Return
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="progress">
            <div>
              <p className="badge">{currentLine.section}</p>
              <h2>
                {currentLine.line}: {currentLine.label}
              </h2>
              {currentLine.manual && (
                <p className="tag">Manual / Simplified</p>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              <p>
                Step {currentIndex + 1} of {formLines.length}
              </p>
              <div className="progress-bar">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <label htmlFor="line-input">Your entry</label>
          {currentLine.type === "select" && (
            <select
              id="line-input"
              value={formatValue(storedValue[currentLine.id]) as string}
              onChange={(event) => updateValue(currentLine.id, event.target.value)}
            >
              <option value="">Select...</option>
              {currentLine.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {currentLine.type === "checkbox" && (
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={Boolean(storedValue[currentLine.id])}
                onChange={(event) => updateValue(currentLine.id, event.target.checked)}
              />
              Yes, I want to designate a third party
            </label>
          )}
          {(currentLine.type === "text" || currentLine.type === "number") && (
            <input
              id="line-input"
              type={currentLine.type}
              value={formatValue(storedValue[currentLine.id])}
              placeholder={currentLine.placeholder}
              onChange={(event) =>
                updateValue(
                  currentLine.id,
                  currentLine.type === "number"
                    ? event.target.value === ""
                      ? ""
                      : Number(event.target.value)
                    : event.target.value
                )
              }
            />
          )}

          <div className="controls">
            <button
              className="secondary"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              Back
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.min(prev + 1, formLines.length - 1))
              }
              disabled={currentIndex === formLines.length - 1}
            >
              Next
            </button>
            <button className="ghost" onClick={() => setExplainLine(currentLine)}>
              Explain
            </button>
          </div>
        </div>

        <aside className="section-card">
          {sectionList.map((section) => {
            const sectionLines = formLines.filter((line) => line.section === section);
            const filledCount = sectionLines.filter((line) => storedValue[line.id]).length;
            return (
              <div className="card" key={section}>
                <h3>{section}</h3>
                <p>
                  {filledCount} of {sectionLines.length} lines filled
                </p>
                <p className="badge">Section card</p>
              </div>
            );
          })}
        </aside>
      </div>

      {explainLine && (
        <ExplainPanel
          line={explainLine}
          value={storedValue[explainLine.id]}
          onClose={() => setExplainLine(null)}
        />
      )}
    </div>
  );
}
