"use client";

import { formLines } from "../lib/lines";
import { useLocalStorage } from "../hooks/useLocalStorage";

const STORAGE_KEY = "form-1040-values";

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

export default function FormViewPage() {
  const { storedValue, ready } = useLocalStorage<Record<string, any>>(
    STORAGE_KEY,
    {}
  );

  if (!ready) {
    return (
      <div className="card">
        <h1>Form View</h1>
        <p>Loading saved values...</p>
      </div>
    );
  }

  const handleExportJson = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      lines: formLines.map((line) => ({
        id: line.id,
        line: line.line,
        label: line.label,
        value: storedValue[line.id] ?? ""
      }))
    };
    downloadFile("form-1040-summary.json", JSON.stringify(payload, null, 2), "application/json");
  };

  const handleExportCsv = () => {
    const rows = ["Line,Label,Value"];
    formLines.forEach((line) => {
      const value = storedValue[line.id] ?? "";
      rows.push(
        `"${line.line}","${line.label}","${String(value).replace(/"/g, '""')}"`
      );
    });
    downloadFile("form-1040-summary.csv", rows.join("\n"), "text/csv");
  };

  return (
    <div>
      <nav className="nav">
        <a href="/">Wizard</a>
        <a href="/form-view">Form View</a>
      </nav>
      <div className="card">
        <h1>Form View</h1>
        <p>
          Review a line-by-line summary of every Form 1040 entry. Blank lines are
          highlighted for follow-up.
        </p>
        <div className="controls">
          <button onClick={handleExportJson}>Export JSON</button>
          <button className="secondary" onClick={handleExportCsv}>
            Export CSV
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Line</th>
              <th>Value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {formLines.map((line) => {
              const value = storedValue[line.id];
              const isBlank = value === undefined || value === "";
              return (
                <tr key={line.id}>
                  <td>
                    <strong>{line.line}</strong> — {line.label}
                  </td>
                  <td>{isBlank ? "—" : String(value)}</td>
                  <td>{isBlank ? "Blank" : "Filled"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
