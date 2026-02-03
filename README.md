# 2025 Form 1040 Line-by-Line Wizard

A static, educational prototype that guides users through every line of the 2025 IRS Form 1040. Built with Next.js App Router + TypeScript and designed for static export to GitHub Pages.

> **Disclaimer:** Educational prototype — not tax advice.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Static export build

This project is configured with `output: "export"`, so `next build` outputs the static site to the `out/` directory.

```bash
npm run build
```

## Deploy to GitHub Pages (GitHub Actions)

1. Push the repository to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build the static export and publish the `out/` directory.
4. If your repository name is not the root domain, the workflow sets `BASE_PATH=/<repo>` so assets resolve correctly.

## LocalStorage usage

- Entries are stored under the key `form-1040-values` in `localStorage`.
- Values are updated on change and restored on refresh.
- The **Load Example Return** button seeds demo data in localStorage for quick previewing.

## Form View export

Use the **Export JSON** or **Export CSV** buttons on the Form View page to download a line-by-line summary of the Form 1040 entries.
