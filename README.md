# Heart of the Program: Virtual Exhibit (React)

A responsive, single-page React exhibit for **Heart of the Program**, an alumni-led oral-history and documentary initiative preserving the history and experiences of the University of Oklahoma's engineering diversity programs.

## Tech stack

- React
- Vite
- CSS
- Native HTML disclosure elements for expandable chapter content

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
heart-of-the-program-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── assets/
        ├── diversity-inclusion-office.jpg
        ├── engineering-broader-impacts.png
        ├── heart-of-the-program-logo.png
        ├── heart-of-the-program-horizontal-logo.png
        ├── minority-engineering-program.png
        └── multicultural-engineering-program.jpg
```

## Update the links before publishing

In `src/App.jsx`, update:

- `ARTIFACT_ARCHIVE_URL` with the published artifact archive URL.
- `GET_INVOLVED_PDF` if you want a different PDF path. By default, put the PDF at `public/how-to-get-involved.pdf`; it will be served at `/how-to-get-involved.pdf`.

## Exhibit chapters

1. Minority Engineering Program
2. Multicultural Engineering Program
3. Diversity & Inclusion Office
4. Engineering Broader Impacts

Chapter content is defined in the `chapters` array in `src/App.jsx`. Update the copy, image, captions, and details there.

## Before publishing

- [ ] Verify formal program and office names, date ranges, and historical transitions.
- [ ] Add the approved `how-to-get-involved.pdf` to `public/`.
- [ ] Replace the artifact archive URL placeholder.
- [ ] Add image creators, dates, source information, and archival credits wherever known.
- [ ] Confirm permissions and privacy considerations for photographs and stories.
- [ ] Add reviewed and approved oral-history excerpts and attribution.
- [ ] Test keyboard navigation, screen readers, mobile layouts, and reduced-motion settings.

## Editorial approach

The exhibit distinguishes documented facts from recollections and leaves unverified chronology open for confirmation. Oral-history quotations should be reviewed, attributed, and approved for public use. Do not publish sensitive material or identifying details without appropriate permission.

## Design references

- [Three Black Wall Streets](https://www.threeblackwallstreets.com/)
- [¡Presente! A Latino History of the United States](https://latino.si.edu/exposiciones/presente)

The exhibit draws inspiration from their approaches to community history, thematic exploration, archival imagery, and first-person storytelling without reproducing their content or designs.

## Project partnership

Living Archive Labs is acknowledged as a project partner, supporting creative technology and digital storytelling for the exhibit. The footer links to [Living Archive Labs](https://www.livingarchivelabs.com/).

## Credits

Heart of the Program is an alumni-led community history initiative. Image credits and full archival provenance should be added as details are confirmed. The supplied Heart of the Program logo files are included in `src/assets/`.
