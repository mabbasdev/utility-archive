<div align="center">

# 🗂️ Utility Archive

**A single-page portfolio site documenting every project I've built across JavaScript, React, PHP, HTML/CSS, and WordPress.**

[![Live Site](https://img.shields.io/badge/Live%20Site-mabbasdev.github.io%2Futility--archive-ff6b00?style=for-the-badge&logo=github)](https://mabbasdev.github.io/utility-archive/)<br>
[![GitHub](https://img.shields.io/badge/GitHub-mabbasdev-181717?style=for-the-badge&logo=github)](https://github.com/mabbasdev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mabbasdev-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/mabbasdev)

</div>

---

## What This Is

Most of the small projects I built while learning don't fit cleanly on a resume. A line like *"Utility Archive — 10+ mini projects"* doesn't tell a recruiter much. This site fixes that.

Every project here has its own card with a live thumbnail, tech stack tags, GitHub link, live demo, and a modal that opens with a full breakdown, what it does, key features, and what I learned building it.

No frameworks. No build tool. One HTML file, one CSS file, one JS file. Deployed on GitHub Pages.

---

## Live Preview

🔗 **[mabbasdev.github.io/utility-archive](https://mabbasdev.github.io/utility-archive/)**

---

## Projects Documented

| # | Project | Category | Tech |
|---|---------|----------|------|
| 1 | [MirchiHut — Premium Desi Fast Food](https://mabbasdev.github.io/mirchihut/) | JavaScript | HTML, CSS, JS |
| 2 | [JavaScript Stopwatch](https://mabbasdev.github.io/js-stopwatch/) | JavaScript | HTML, CSS, JS |
| 3 | [YouTube UI Clone](https://youtube-ui-clone-mu.vercel.app/) | HTML/CSS | HTML, CSS, JS |
| 4 | [Todo App](https://mabbasdev.github.io/js-todolist/) | JavaScript | HTML, CSS, JS |
| 5 | [CSS Gradient Generator](https://mabbasdev.github.io/js-gradient-generator/) | JavaScript | HTML, CSS, JS |
| 6 | [Atlas Portfolio](https://mabbasdev.github.io/04-atlas-portfolio/) | JavaScript | HTML, CSS, JS |
| 7 | [Movie Website UI](https://movie-website-ui.vercel.app/) | JavaScript | HTML, CSS, JS |
| 8 | [vCard Portfolio](https://vcard-portfolio-remastered.vercel.app/) | HTML/CSS | HTML, CSS, JS |
| 9 | [MediaZen Agency](https://mediazen.gatherknow.com/) | WordPress | WordPress, Elementor Pro, CSS, Hostinger |
| 10 | [Metro Mail News](https://simplemetro.gatherknow.com/) | WordPress | WordPress, CSS, JS, Hostinger |
| 11 | [Lead Capture — Jornaya Integration](https://call.gatherknow.com/) | JavaScript | HTML, CSS, JS |
| 12 | [YouTube Thumbnail Downloader](https://thumbnail.gatherknow.com/) | PHP | HTML, CSS, JS, PHP |
| 13 | [WinWin Real Estate Redesign](https://winwin.gatherknow.com/) | WordPress | WordPress, Elementor Pro, CSS |

---

## Site Features

**Filtering and Search**
- Filter cards by category: All, JavaScript, PHP, HTML/CSS, WordPress
- Live search hits project name, description, and tech stack simultaneously
- Filter counts update dynamically so you always know what's visible

**Project Cards**
- Thumbnail screenshot from each project's live page
- Tech stack tags with colour-coded badges
- Direct GitHub and Live Demo buttons on the card — no extra click needed

**Project Modal**
- Opens with a smooth center-scale animation on every click
- Four sections per project: About, Key Features, What I Learned, Tech Stack
- Tech stack displayed as icon + label pills using Font Awesome brand icons at their actual brand colours
- Keyboard accessible — `Escape` closes, focusable close button

**UI Details**
- Sticky header gains a shadow on scroll
- Responsive grid: 4 columns → 3 → 2 → 1 based on viewport
- Scroll-to-top button appears after 400px scroll
- Custom orange scrollbar consistent with the design system

---

## File Structure

```
utility-archive/
├── index.html          # Markup and modal structure
├── style.css           # All styles — variables, grid, cards, modal, footer
├── script.js           # TECH registry, PROJECTS data, render functions
├── favicon.png
└── assets/
    └── img/            # Project thumbnail screenshots
```

---

## How to Add a New Project

Open `script.js` and add a new object to the `PROJECTS` array:

```js
{
    id: 14,                                 // Next sequential ID
    mainIcon: 'fas fa-icon-name',           // Font Awesome icon class
    category: 'JavaScript',                 // All | JavaScript | PHP | HTML/CSS | WordPress
    name: 'Your Project Name',
    short: 'One-line description for the card.',
    about: 'Longer paragraph shown in the modal.',
    features: [
        'Feature one',
        'Feature two',
    ],
    learnings: [
        'What you learned building this',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],    // Keys must match the TECH registry
    github: 'https://github.com/mabbasdev/your-repo',
    demo: 'https://your-live-demo.com',
    thumbnail: 'assets/img/your-project.png'
}
```

**To add a new tech type**, add it to the `TECH` registry at the top of `script.js`:

```js
const TECH = {
    // ... existing entries
    Vue: { fa: 'fab fa-vuejs', color: '#42b883', iconCls: 'ti-vue', tagCls: 'tag-vue' },
};
```

Then add the corresponding tag CSS class in `style.css`:

```css
.tag-vue { background: #dcfce7; color: #166534; }
```

---

## Design System

Built to match the same dark/orange design language as [MirchiHut](https://github.com/mabbasdev/mirchihut).

| Token | Value |
|-------|-------|
| `--dark` | `#0f172a` |
| `--orange` | `#ff8c42` |
| `--orange-dark` | `#ff6b00` |
| `--orange-glow` | `rgba(255, 107, 0, 0.30)` |
| `--body-bg` | `#f8fafc` |
| Heading font | Poppins 600–900 |
| Body font | Inter 400–800 |

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat&logo=github&logoColor=white)

---

## Author

**Muhammad Abbas** — MERN stack developer and founder of [GatherKnow](https://gatherknow.com).

- GitHub: [@mabbasdev](https://github.com/mabbasdev)
- LinkedIn: [mabbasdev](https://linkedin.com/in/mabbasdev)
- Blog: [gatherknow.com](https://gatherknow.com)
