import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ isDark: boolean }>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');

  :root {
    --bg: ${({ isDark }) => (isDark ? '#0c1421' : '#f6f1ea')};
    --bg-elevated: ${({ isDark }) => (isDark ? 'rgba(14, 24, 39, 0.8)' : 'rgba(255, 252, 247, 0.78)')};
    --surface: ${({ isDark }) => (isDark ? '#101b2d' : '#fcfaf6')};
    --surface-strong: ${({ isDark }) => (isDark ? '#142135' : '#f8f2ea')};
    --text: ${({ isDark }) => (isDark ? '#adcdff' : '#222833')};
    --muted: ${({ isDark }) => (isDark ? '#9facc1' : '#68707c')};
    --border: ${({ isDark }) => (isDark ? 'rgba(163, 180, 204, 0.12)' : 'rgba(34, 40, 51, 0.08)')};
    --accent: ${({ isDark }) => (isDark ? '#e6ad72' : '#bf6a2c')};
    --accent-soft: ${({ isDark }) => (isDark ? 'rgba(230, 173, 114, 0.1)' : 'rgba(191, 106, 44, 0.1)')};
    --accent-strong: ${({ isDark }) => (isDark ? '#b7d5d0' : '#466a66')};
    --shadow: ${({ isDark }) =>
      isDark
        ? '0 18px 40px rgba(0, 0, 0, 0.22)'
        : '0 18px 42px rgba(43, 38, 32, 0.08)'};
    --hero-glow: ${({ isDark }) =>
      isDark
        ? 'radial-gradient(circle at top, rgba(230, 173, 114, 0.12), transparent 58%)'
        : 'radial-gradient(circle at top, rgba(191, 106, 44, 0.1), transparent 60%)'};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background:
      radial-gradient(circle at top left, rgba(91, 107, 138, 0.05), transparent 26%),
      radial-gradient(circle at bottom right, rgba(191, 106, 44, 0.05), transparent 22%),
      var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  .container {
    width: min(1180px, calc(100% - 2rem));
    margin: 0 auto;
  }

  main {
    overflow: hidden;
  }

  section {
    position: relative;
  }

  h1,
  h2,
  h3,
  .brand strong {
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.04em;
    line-height: 1.05;
  }

  h1 {
    font-size: clamp(3rem, 7vw, 5.8rem);
  }

  h2 {
    font-size: clamp(2.2rem, 5vw, 3.6rem);
  }

  h3 {
    font-size: 1.45rem;
  }

  p {
    color: var(--muted);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--bg-elevated);
    backdrop-filter: blur(8px);
    color: var(--accent-strong);
    font-size: 0.92rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .eyebrow::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: var(--accent);
  }

  .section-heading {
    max-width: 760px;
    margin-bottom: 3rem;
  }

  .section-heading h2 {
    margin: 1rem 0;
  }

  .section-heading p {
    font-size: 1.05rem;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 1rem 0 0;
  }

  .header-shell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1.1rem;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--bg-elevated);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 16px;
    background: var(--text);
    color: #fff;
    font-weight: 700;
  }

  .brand div {
    display: grid;
    gap: 0.1rem;
  }

  .brand span {
    color: var(--muted);
    font-size: 0.92rem;
  }

  .desktop-nav {
    display: flex;
    gap: 1.5rem;
    font-weight: 500;
  }

  .desktop-nav a {
    color: var(--muted);
    transition: color 0.2s ease;
  }

  .desktop-nav a:hover,
  .desktop-nav a:focus-visible {
    color: var(--text);
  }

  .theme-toggle,
  .primary-button,
  .secondary-button {
    border: none;
    border-radius: 999px;
    font: inherit;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1rem;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
  }

  .theme-toggle:hover,
  .primary-button:hover,
  .secondary-button:hover {
    transform: translateY(-1px);
  }

  .hero-section {
    padding: 5rem 0 3.5rem;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--hero-glow);
    pointer-events: none;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2.5rem;
    align-items: center;
    min-height: calc(100vh - 8rem);
  }

  .hero-copy,
  .hero-visual,
  .projects-section,
  .skills-section,
  .contact-section {
    position: relative;
    z-index: 1;
  }

  .hero-copy h1 {
    margin: 1.4rem 0 1.2rem;
    max-width: 12ch;
    text-wrap: balance;
  }

  .hero-lead {
    max-width: 60ch;
    font-size: 1.1rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1.75rem 0 1.2rem;
  }

  .primary-button,
  .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.4rem;
    padding: 0 1.4rem;
    font-weight: 700;
  }

  .primary-button {
    background: var(--text);
    color: #fff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .secondary-button {
    background: var(--bg-elevated);
    color: var(--text);
    border: 1px solid var(--border);
  }

  .hero-highlights {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .portrait-card,
  .project-card,
  .skill-card,
  .contact-form {
    border: 1px solid var(--border);
    background: var(--bg-elevated);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .hero-visual {
    position: relative;
    min-height: 520px;
  }

  .portrait-card {
    position: absolute;
    inset: 1.5rem 1.5rem 1.5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: 28px;
    background: linear-gradient(180deg, var(--surface), var(--surface-strong));
    overflow: hidden;
  }

  .portrait-card img {
    position: relative;
    z-index: 1;
    width: min(100%, 400px);
    max-height: 340px;
    align-self: center;
    object-fit: contain;
    filter: drop-shadow(0 20px 45px rgba(0, 0, 0, 0.24));
  }

  .portrait-glow {
    position: absolute;
    width: 14rem;
    height: 14rem;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(183, 213, 208, 0.18), transparent 60%);
    filter: blur(20px);
  }

  .hero-highlights div,
  .floating-note {
    border: 1px solid var(--border);
    background: var(--bg-elevated);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .hero-highlights div {
    padding: 1.15rem;
    border-radius: 24px;
  }

  .hero-highlights strong,
  .floating-note span {
    color: var(--text);
    display: block;
    margin-bottom: 0.35rem;
  }

  .floating-note {
    position: absolute;
    max-width: 220px;
    padding: 1rem 1.1rem;
    border-radius: 22px;
    z-index: 2;
  }

  .note-top {
    top: 1rem;
    right: 0;
  }

  .note-bottom {
    bottom: 0;
    left: 0;
  }

  .projects-section,
  .skills-section,
  .contact-section {
    padding: 4rem 0;
  }

  .project-grid,
  .skills-grid,
  .contact-grid {
    display: grid;
    gap: 1.5rem;
  }

  .project-grid,
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-card,
  .skill-card {
    padding: 1.6rem;
    border-radius: 22px;
  }

  .project-accent {
    display: inline-flex;
    margin-bottom: 1rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .project-card h3,
  .skill-card h3 {
    margin-bottom: 0.9rem;
  }

  .project-card a {
    display: inline-flex;
    margin-top: 1.35rem;
    color: var(--text);
    font-weight: 700;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.3rem;
  }

  .tag-list span {
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 0.92rem;
  }

  .contact-grid {
    grid-template-columns: 0.9fr 1.1fr;
    align-items: start;
  }

  .contact-copy h2 {
    margin: 1rem 0;
  }

  .contact-points {
    display: grid;
    gap: 1rem;
    margin: 2rem 0;
  }

  .contact-points div {
    display: grid;
    gap: 0.3rem;
  }

  .contact-points strong {
    color: var(--text);
  }

  .contact-socials {
    display: flex;
    gap: 1rem;
  }

  .contact-socials a {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 1.15rem;
  }

  .contact-form {
    padding: 1.6rem;
    border-radius: 24px;
  }

  .field + .field {
    margin-top: 1rem;
  }

  .field input,
  .field textarea {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--surface);
    color: var(--text);
    padding: 1rem 1.1rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    resize: vertical;
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-soft);
  }

  .form-submit {
    width: 100%;
    margin-top: 1rem;
  }

  .form-alert {
    margin-bottom: 1rem;
    padding: 0.9rem 1rem;
    border-radius: 16px;
    font-weight: 500;
  }

  .form-alert.success {
    background: rgba(32, 168, 96, 0.16);
    color: #1b8b56;
  }

  .form-alert.error {
    background: rgba(211, 71, 71, 0.16);
    color: #c03939;
  }

  .site-footer {
    padding: 1rem 0 2rem;
  }

  .footer-shell {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.4rem 1.2rem 0;
    border-top: 1px solid var(--border);
  }

  .footer-shell a {
    color: var(--text);
    font-weight: 700;
  }

  @media (max-width: 1100px) {
    .header-shell {
      gap: 0.75rem;
      padding-inline: 1rem;
    }

    .desktop-nav {
      gap: 1rem;
      font-size: 0.96rem;
    }

    .hero-grid {
      gap: 2rem;
    }

    .project-grid,
    .skills-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 960px) {
    .desktop-nav {
      display: none;
    }

    .site-header {
      padding-top: 0.85rem;
    }

    .header-shell {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
    }

    .hero-grid,
    .project-grid,
    .skills-grid,
    .contact-grid {
      grid-template-columns: 1fr;
    }

    .hero-section {
      padding: 3rem 0 2.5rem;
    }

    .hero-grid {
      min-height: auto;
      gap: 1.5rem;
    }

    .hero-copy h1 {
      max-width: 100%;
    }

    .hero-lead {
      max-width: 100%;
    }

    .hero-visual {
      min-height: auto;
    }

    .portrait-card {
      position: relative;
      inset: auto;
      min-height: 0;
    }

    .portrait-card img {
      width: min(100%, 360px);
      max-height: 300px;
    }

    .hero-highlights {
      grid-template-columns: 1fr;
    }

    .note-top {
      right: 1rem;
    }

    .note-bottom {
      left: 1rem;
    }
  }

  @media (max-width: 720px) {
    .site-header {
      padding-top: 0.75rem;
    }

    .container {
      width: min(100% - 1.25rem, 1180px);
    }

    .header-shell {
      grid-template-columns: 1fr;
      justify-items: stretch;
      padding: 0.9rem;
    }

    .brand {
      width: 100%;
      justify-content: flex-start;
      gap: 0.75rem;
    }

    .brand strong {
      font-size: 0.98rem;
    }

    .brand span {
      font-size: 0.85rem;
    }

    .theme-toggle {
      justify-content: center;
      width: 100%;
      min-height: 3rem;
    }

    .eyebrow {
      width: 100%;
      justify-content: center;
      padding-inline: 0.9rem;
      font-size: 0.78rem;
      text-align: center;
    }

    .hero-copy h1 {
      margin-top: 1.1rem;
      font-size: clamp(2.35rem, 12vw, 3.4rem);
      line-height: 1.02;
    }

    .hero-lead {
      font-size: 1rem;
    }

    .hero-actions {
      flex-direction: column;
      gap: 0.75rem;
    }

    .primary-button,
    .secondary-button {
      width: 100%;
    }

    .hero-highlights {
      gap: 0.75rem;
    }

    .portrait-card {
      padding: 1.25rem 1.15rem 1rem;
      border-radius: 20px;
    }

    .portrait-card img {
      width: min(100%, 280px);
      max-height: 220px;
    }

    .floating-note {
      position: relative;
      inset: auto;
      max-width: none;
      padding: 0.9rem 1rem;
    }

    .section-heading {
      margin-bottom: 2rem;
    }

    .section-heading p {
      font-size: 0.98rem;
    }

    .projects-section,
    .skills-section,
    .contact-section {
      padding: 3rem 0;
    }

    .project-card,
    .skill-card,
    .contact-form {
      padding: 1.25rem;
      border-radius: 18px;
    }

    .tag-list {
      gap: 0.55rem;
    }

    .tag-list span {
      font-size: 0.88rem;
      padding: 0.5rem 0.72rem;
    }

    .contact-socials {
      flex-wrap: wrap;
    }

    .contact-socials a {
      width: 2.75rem;
      height: 2.75rem;
    }

    .field input,
    .field textarea {
      padding: 0.9rem 1rem;
      border-radius: 14px;
    }

    .footer-shell {
      flex-direction: column;
      align-items: flex-start;
      padding-inline: 0;
    }
  }

  @media (max-width: 420px) {
    .hero-section {
      padding-top: 2.5rem;
    }

    .header-shell {
      border-radius: 16px;
    }

    .brand-mark {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 12px;
    }

    .hero-copy h1 {
      font-size: clamp(2.1rem, 11vw, 2.8rem);
    }

    .eyebrow {
      font-size: 0.72rem;
      letter-spacing: 0.05em;
    }

    .project-card,
    .skill-card,
    .contact-form,
    .portrait-card,
    .floating-note {
      border-radius: 16px;
    }
  }
`

export default GlobalStyle
