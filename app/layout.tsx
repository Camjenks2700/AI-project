import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025 Form 1040 Line-by-Line Wizard",
  description: "Educational prototype wizard for IRS Form 1040 lines."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="banner">
          <p>Educational prototype — not tax advice.</p>
        </header>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
