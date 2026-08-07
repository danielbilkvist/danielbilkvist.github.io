const projects = [
  {
    slug: "web-app",
    title: "Hoomie",
    year: "2. Semester - Web App",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["React", "Vite", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}public/Hoomie Mockup.png`,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "customer-experience",
    title: "WANTED Archives",
    year: "2. Semester - Customer Experience",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}public/Wanted Mockup.png`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
  {
    slug: "exam-project",
    title: "Spilcaféen",
    year: "1. Semester - Exam Project",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre can forstå dit arbejde.",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}public/Spilcafe Mokcup.png`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  }
];

export default projects;
