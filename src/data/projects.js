const projects = [
  {
    slug: "customer-experience",
    title: "WANTED Archives",
    year: "Customer Experience Project",
    summary:
      "WANTED Archives is a fictional clothing brand. The brand identity is created from scratch. Its mostly inspired by rough and urban street fashion, with a touch of wild west vigilante energy. The project is built with React, Vite and deployed on GitHub Pages. The project is a single page application (SPA) with a responsive design",
    description: "---",
    tags: [
      "Customer Experience/UX",
      "Brand Identity",
      "B2C",
      "Social Media Marketing",
      "React",
      "Github Colaboration",
      "E-commerce",
    ],
    image: `${import.meta.env.BASE_URL}MockupWanted.svg`,
    image2: `${import.meta.env.BASE_URL}MockupHoomie.png`,
    links: [
      {
        label: "Live site",
        href: "https://magecties.github.io/customer-experience-exam/",
      },
      // {
      //   label: "GitHub repo",
      //   href: "https://github.com/username/username.github.io",
      // },
    ],
  },
  {
    slug: "exam-project",
    title: "Spilcaféen",
    year: "Interaction Design Project",
    summary:
      "A redesign of a previous IXD project for Spilcaféen, focused on improving usability, navigation, visual consistency, and responsive design while maintaining the existing brand identity.",
    description: "---",
    tags: [
      "UX/UI & Design",
      "Figma",
      "Responsive Design",
      "Usability",
      "Navigation",
      "Visual Consistency",
      "Design System",
    ],
    image: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    links: [
      {
        label: "Live Site",
        href: "https://danielbilkvist.github.io/SpilcafeEksamen/",
      },
    ],
  },
  {
    slug: "web-app",
    title: "Hoomie",
    year: "Web App Project",
    summary:
      "Hommie is a web application designed for young adults living with roommates, helping them manage household responsibilities together. The app combines shared chores, shopping lists, and a household calendar to create better structure and transparency. Gamification, points, leaderboards, and the Hoomie mascot make everyday chores more motivating and engaging. The project was developed using UX research, Figma, React, React Router, and Supabase, with a strong focus on usability and simplicity.",
    description: "---",
    tags: [
      "UX/UI & Design",
      "React",
      "Supabase",
      "CRUD",
      "Figma",
      "Gamification",
    ],
    image: `${import.meta.env.BASE_URL}MockupHoomie.svg`,
    links: [
      {
        label: "Live Site",
        href: "https://sebbbenator.github.io/hoomie/task",
      },
    ],
  },

  {
    slug: "takenow",
    title: "TakeNOW.dk",
    year: "Website Contribution",
    summary:
      "Ive helped  updating different pages, informations and adding new stores to the website.",
    description: "---",
    tags: ["Wordpress", "Elementor"],
    image: `${import.meta.env.BASE_URL}Takenow.png`,
    links: [
      {
        label: "Website",
        href: "https://takenow.dk/",
      },
    ],
  },
  {
    slug: "unyttigt",
    title: "Unyttigt.dk",
    year: "Website Contribution",
    summary:
      "Ive helped develop the website for Unyttigt.dk. Helping with layout, design and adding products and stock to the shopify page.",
    description: "---",
    tags: ["Shopify"],
    image: `${import.meta.env.BASE_URL}Unyttigt.png`,
    links: [
      {
        label: "Website",
        href: "https://unyttigt.dk/",
      },
    ],
  },
  {
    slug: "bedsteven",
    title: "Bedsteven.dk",
    year: "Website Contribution",
    summary:
      "Ive helped develop the website for Bedsteven.dk. Helping with layout, design and adding products and stock to the shopify page.",
    description: "---",
    tags: ["Shopify"],
    image: `${import.meta.env.BASE_URL}Bedsteven.png`,
    links: [
      {
        label: "Website",
        href: "https://bedsteven.dk/",
      },
    ],
  },
];

export default projects;
