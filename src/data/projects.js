const projects = [
  {
    slug: "customer-experience",
    title: "WANTED Archives",
    year: "Customer Experience Project",
    summary:
      "WANTED Archives is a fictional clothing brand. The brand identity is created from scratch. Its mostly inspired by rough and urban street fashion, with a touch of wild west vigilante energy. The project is built with React, Vite and deployed on GitHub Pages. The project is a single page application (SPA) with a responsive design",
    description: "---",
    category: ["Projects"],
    tags: [
      "Customer Experience/UX",
      "Brand Identity",
      "B2C",
      "Social Media Marketing",
      "React",
      "Github Colaboration",
      "E-commerce",
    ],
    thumbnail: `${import.meta.env.BASE_URL}MockupWanted.svg`,
    image1: `${import.meta.env.BASE_URL}MockupHoomie.png`,
    process1: "Define the project direction, audience, and visual identity.",
    links: [
      {
        label: "Live site",
        href: "https://magecties.github.io/customer-experience-exam/",
      },
    ],
  },
  {
    slug: "exam-project",
    title: "Spilcaféen",
    year: "Interaction Design Project",
    summary:
      "A redesign of a previous IXD project for Spilcaféen, focused on improving usability, navigation, visual consistency, and responsive design while maintaining the existing brand identity.",
    description: "---",
    category: ["Projects"],
    tags: [
      "UX/UI & Design",
      "Figma",
      "Responsive Design",
      "Usability",
      "Navigation",
      "Visual Consistency",
      "Design System",
    ],
    thumbnail: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    image1: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process1:
      "Research the existing experience and identify opportunities for improvement.",
    links: [
      {
        label: "Live Site",
        href: "https://danielbilkvist.github.io/SpilcafeEksamen/",
      },
      {
        label: "Github Repo",
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
    category: ["Projects"],
    tags: [
      "UX/UI & Design",
      "React",
      "Supabase",
      "CRUD",
      "Figma",
      "Gamification",
    ],
    thumbnail: `${import.meta.env.BASE_URL}MockupHoomie.svg`,
    image1: `${import.meta.env.BASE_URL}MockupHoomie.svg`,
    process1: "Explore the users' needs and shape the core product experience.",
    links: [
      {
        label: "Live Site",
        href: "https://sebbbenator.github.io/hoomie/task",
      },
    ],
    image1: `${import.meta.env.BASE_URL}Takenow.png`,
  },

  {
    slug: "takenow",
    title: "TakeNOW.dk",
    year: "Website Contribution",
    summary:
      "Ive helped  updating different pages, informations and adding new stores to the website.",
    description: "---",
    category: ["Contributions"],
    tags: ["Wordpress", "Elementor"],
    thumbnail: `${import.meta.env.BASE_URL}Takenow.png`,
    process1:
      "Review the existing website and identify the pages that need updating.",
    links: [
      {
        label: "Website",
        href: "https://takenow.dk/",
      },
    ],
    image1: `${import.meta.env.BASE_URL}Unyttigt.png`,
  },
  {
    slug: "unyttigt",
    title: "Unyttigt.dk",
    year: "Website Contribution",
    summary:
      "Ive helped develop the website for Unyttigt.dk. Helping with layout, design and adding products and stock to the shopify page.",
    description: "---",
    category: ["Contributions"],
    tags: ["Shopify"],
    thumbnail: `${import.meta.env.BASE_URL}Unyttigt.png`,
    process1: "Plan the layout, product presentation, and content structure.",
    links: [
      {
        label: "Website",
        href: "https://unyttigt.dk/",
      },
    ],
    image1: `${import.meta.env.BASE_URL}Bedsteven.png`,
  },
  {
    slug: "bedsteven",
    title: "Bedsteven.dk",
    year: "Website Contribution",
    summary:
      "Ive helped develop the website for Bedsteven.dk. Helping with layout, design and adding products and stock to the shopify page.",
    description: "---",
    category: ["Contributions"],
    tags: ["Shopify"],
    thumbnail: `${import.meta.env.BASE_URL}Bedsteven.png`,
    process1:
      "Review the shop structure and improve the presentation of products and content.",
    links: [
      {
        label: "Website",
        href: "https://bedsteven.dk/",
      },
    ],
  },
];

export default projects;
