import { useState } from "react";
import engineeringBroaderImpacts from "./assets/engineering-broader-impacts.png";
import minorityEngineering from "./assets/minority-engineering-program.png";
import multiculturalEngineering from "./assets/multicultural-engineering-program.jpg";
import diversityInclusion from "./assets/diversity-inclusion-office.jpg";
import heartOfProgramHorizontalLogo from "./assets/heart-of-the-program-horizontal-logo.png";
import livingArchiveLabsLogo from "./assets/living-archive-labs-logo.png";

// Replace these values before publishing.
const ARTIFACT_ARCHIVE_URL = "https://drive.google.com/drive/folders/1eJKaJn6LhmDDtKEmRfM23CXBATjiM865?usp=sharing";
const GET_INVOLVED_PDF = "/heart-of-the-program-virtual-exhibit/how-to-get-involved.pdf";

const chapters = [
  {
    number: "01",
    id: "minority-engineering",
    eyebrow: "Program chapter",
    title: "Minority Engineering Program",
    image: minorityEngineering,
    alt: "An archival group photograph labeled 'Minority Engineers, group 1'.",
    caption: "Archival group photograph · Minority Engineers",
    intro: "A chapter in the story of efforts to broaden access to engineering education and build community among students historically underrepresented in the field.",
    prompt: "The archive will explore the program's beginnings, the people who sustained it, the student experience, and the networks that grew around it.",
    details: "Founding and early milestones, student organizations and peer networks, advising and academic support, alumni reflections, and the program's influence on later initiatives.",
    note: "Add verified dates, names, source information, and oral-history excerpts here."
  },
  {
    number: "02",
    id: "multicultural-engineering",
    eyebrow: "Program chapter",
    title: "Multicultural Engineering Program",
    image: multiculturalEngineering,
    alt: "A group of students standing together outside a university building; the photograph is dated September 11, 2006.",
    caption: "Group photograph · September 11, 2006",
    intro: "A continuing chapter in the effort to foster connection, opportunity, and a stronger sense of community for engineering students.",
    prompt: "Photographs and personal accounts can help show what participation looked like: the friendships, traditions, support systems, challenges, and achievements that shaped student life.",
    details: "Program activities, student experiences, mentoring, outreach, community partnerships, and the transition from earlier program structures.",
    note: "Add verified dates, names, source information, and oral-history excerpts here."
  },
  {
    number: "03",
    id: "diversity-inclusion",
    eyebrow: "Office chapter",
    title: "Diversity & Inclusion Office",
    image: diversityInclusion,
    alt: "A large group gathered for a formal photograph, with many people wearing graduation stoles.",
    caption: "Community group photograph · Date to be confirmed",
    intro: "An institutional chapter in the ongoing work of supporting students, building relationships, and advancing inclusion within engineering.",
    prompt: "This chapter will document the people, partnerships, programs, and everyday work behind the office, including the experiences of students and alumni whose lives intersected with it.",
    details: "Office leadership and staff, student support, signature programs, collaborations across campus, and the experiences of the communities served.",
    note: "Confirm the office's formal name and dates, then add staff histories, milestones, and oral-history excerpts."
  },
  {
    number: "04",
    id: "engineering-broader-impacts",
    eyebrow: "Current and continuing work",
    title: "Engineering Broader Impacts",
    image: engineeringBroaderImpacts,
    alt: "A large group of students gathered outdoors at an engineering summer bridge event.",
    caption: "Engineering summer bridge group photograph",
    intro: "A chapter focused on the people and programs connecting engineering education with broader communities and future generations.",
    prompt: "The archive will explore how outreach, student engagement, educational pathways, and community partnerships carry this work forward.",
    details: "Outreach and bridge programs, K–12 engagement, student leadership, community partnerships, and the people who make these experiences possible.",
    note: "Add verified program names, dates, participant stories, and source information."
  }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["The story", "#story"],
    ["Generations", "#generations"],
    ["Community voices", "#voices"],
    ["Get involved", "#get-involved"]
  ];

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Heart of the Program home">
        <img src={heartOfProgramHorizontalLogo} alt="Heart of the Program: Stories, Legacy, Community" />
      </a>
      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <nav id="primary-nav" className={`primary-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="#contribute" className="nav-cta" onClick={() => setMenuOpen(false)}>Add to the archive</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">An evolving community archive</p>
        <h1>The people behind the <em>program.</em></h1>
        <p className="hero-lede">A history of the students, educators, and communities who helped shape generations of engineering at the University of Oklahoma.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#generations">Explore the generations <span aria-hidden="true">↓</span></a>
          <a className="text-link light-link" href="#story">Why this history matters</a>
        </div>
      </div>
      <figure className="hero-image">
        <img src={diversityInclusion} alt="A group of engineering students and community members gathered for a group portrait indoors." fetchPriority="high" />
        <figcaption>One community, many generations.<span>Photograph from the project archive</span></figcaption>
      </figure>
      <div className="hero-index" aria-hidden="true">OU / ENGINEERING / COMMUNITY HISTORY</div>
    </section>
  );
}

function SectionKicker({ number, children }) {
  return <div className="section-kicker"><span>{number}</span> {children}</div>;
}

function StoryIntro() {
  return (
    <>
      <section className="intro-section section-wrap" id="story">
        <SectionKicker number="01">The story</SectionKicker>
        <div className="intro-grid">
          <h2>A program is more than an office. <em>It is a community.</em></h2>
          <div className="intro-copy">
            <p>For generations, students, staff, faculty, alumni, and partners have worked to make engineering a place where more people can learn, contribute, and belong.</p>
            <p>This exhibit brings together photographs, memories, documents, and first-person stories to trace that work across changing programs and changing names. It is not only a record of institutional history. It is a record of the people who made that history.</p>
            <p className="note">This is a growing archive. Dates, program milestones, and individual stories will be added as they are verified with alumni and historical records.</p>
          </div>
        </div>
      </section>
      <section className="archive-cta-section" id="artifact-archive">
        <div className="section-wrap archive-cta-inner">
          <div>
            <p className="eyebrow">Explore the collection</p>
            <h2>Go beyond the photographs.</h2>
            <p>The artifact archive brings together the documents, photographs, and materials that help tell this community's story.</p>
          </div>
          <a className="button button-light" href={ARTIFACT_ARCHIVE_URL} target="_blank" rel="noreferrer">Explore the artifact archive <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

function ChapterCard({ chapter, reverse }) {
  return (
    <article className={`generation-card ${reverse ? "reverse" : ""}`} id={chapter.id}>
      <div className="generation-number">{chapter.number}</div>
      <figure className={`generation-photo ${chapter.id === "minority-engineering" ? "photo-archive" : ""}`}>
        <img src={chapter.image} alt={chapter.alt} loading="lazy" />
        <figcaption>{chapter.caption}</figcaption>
      </figure>
      <div className="generation-copy">
        <p className="eyebrow">{chapter.eyebrow}</p>
        <h3>{chapter.title}</h3>
        <p className="chapter-intro">{chapter.intro}</p>
        <p className="chapter-prompt">{chapter.prompt}</p>
        <details>
          <summary>Explore this chapter</summary>
          <div className="details-content">
            <p><strong>Stories to include:</strong> {chapter.details}</p>
            <p className="editor-note">Exhibit development note: {chapter.note}</p>
          </div>
        </details>
      </div>
    </article>
  );
}

function Generations() {
  return (
    <section className="generations-section" id="generations">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <SectionKicker number="02">The generations</SectionKicker>
            <h2>Many names. <em>A shared purpose.</em></h2>
          </div>
          <p>Explore the programs and offices represented in this history. Each chapter will grow with photographs, milestones, and the voices of the people who experienced it.</p>
        </div>
        <div className="generation-list">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityVoices() {
  return (
    <section className="voices-section" id="voices">
      <div className="section-wrap voices-grid">
        <div>
          <SectionKicker number="03">Community voices</SectionKicker>
          <h2>History lives in the <em>people who remember.</em></h2>
        </div>
        <div className="voices-copy">
          <p>Photographs can show who was there. Oral histories help us understand what it meant to be there.</p>
          <p>Alumni, students, faculty, staff, and community partners each hold part of this story. Their memories add context to the record and help future generations understand how the community changed over time.</p>
          <div className="quote-placeholder">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>First-person memories and interview excerpts will appear here as they are reviewed and approved for the exhibit.</p>
            <span className="quote-credit">Oral history collection · In development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section className="get-involved-section" id="get-involved">
      <div className="section-wrap involved-grid">
        <div>
          <SectionKicker number="04">Get involved</SectionKicker>
          <h2>Help preserve the <em>whole story.</em></h2>
        </div>
        <div className="involved-copy">
          <p>This archive grows through the people who lived these experiences and the people who helped make the programs possible. Whether you are an alum, former student, staff or faculty member, or community partner, there is a place for your story.</p>
          <p>Download the project guide to learn more about the initiative, the kinds of materials being collected, and ways to participate.</p>
          <div className="involved-actions">
            <a className="button button-dark" href={GET_INVOLVED_PDF} target="_blank" rel="noreferrer">How to get involved (PDF) <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contribute">Other ways to contribute <span aria-hidden="true">→</span></a>
          </div>
          <p className="small-note">The PDF link will work once the project guide is added to the public folder as <code>how-to-get-involved.pdf</code>.</p>
        </div>
      </div>
    </section>
  );
}

function Contribute() {
  return (
    <section className="contribute-section" id="contribute">
      <div className="section-wrap contribute-inner">
        <p className="eyebrow">Help complete the picture</p>
        <h2>Were you part of this story?</h2>
        <p>Share a photograph, document, memory, or correction. Every contribution helps make this archive more complete and more useful to the generations that follow.</p>
        <a className="button button-dark" href="#get-involved">Contribution details <span aria-hidden="true">↓</span></a>
        <p className="small-note">Submission instructions will be published here once the project team confirms a contribution process. Please do not send original or sensitive materials in the meantime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-project">
          <img className="footer-project-logo" src={heartOfProgramHorizontalLogo} alt="Heart of the Program: Stories, Legacy, Community" />
          <p>An alumni-led effort to preserve the history and experiences of OU engineering communities.</p>
        </div>
        <div className="footer-partner">
          <span className="partner-label">Project partner</span>
          <a
            className="partner-brand"
            href="https://www.livingarchivelabs.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Living Archive Labs"
          >
            <img
              src={livingArchiveLabsLogo}
              alt=""
              className="partner-brand-logo"
            />
            <span>Living Archive Labs</span>
          </a>
          <p>Creative technology and digital storytelling support for community history and public access.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>University of Oklahoma · Engineering community history</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <StoryIntro />
        <Generations />
        <CommunityVoices />
        <GetInvolved />
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
