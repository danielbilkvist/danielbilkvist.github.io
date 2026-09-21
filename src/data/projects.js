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
      "Spilcaféen is a redesign and development project based on a previous 1st-semester project. The goal was to improve the websites usability, navigation and visual consistency.",
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
      "First i evaluated the existing protoype using Heuristic Evaluation to identify usability and design issues. The most common issues were related to Visibility of System Status and Consistency and Standards. The evaluation showed me where i had to proritize my work and make improvements to the design.",
    image2: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process2:
      "Following the first step i formed a Task Flow to identify the central function that had to be improved. My main focus landed on the login page, game cards, profile functions and favorite library. The Task Flow made the users path through the website clear.",
    image3: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process3:
      "It was now possible to create Low-Fidelity wireframes based on the previous prototype and the newly formed Task Flow. Figma was used for the wireframing and formed the visual process of the users journey.",
    image4: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process4:
      "From the Low-Fidelity wireframes i created the first Prototype. It combines all of the new learnings with the previous design. Key changes was a constant Navigation bar which was always accesible for the user. As well as a clear indicator of the users current Location.",
    image5: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process5:
      "The new design was exposed to numerous Think Aloud Tests to make sure the new navigation and usability was clear and easy for users to understand. The test showed new issues with button touch points which was fixed for the final design.",
    image6: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process6:
      "To prepare for the final design i created a Design System to make sure the visual identity was consistent across the entire website. The Design System included colors, typography, buttons, icons and other visual elements that were used throughout the website.",
    image7: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process7:
      "When designing the final protype UX-Laws like Jakobs Law, Fitts Law and Gestalt principles were used to make sure the design stayed intuitve and user friendly.",
    image8: `${import.meta.env.BASE_URL}MockupSpilcafe.svg`,
    process8:
      "The final design was translated to a working Website using HTML, CSS and JavaScript. The website was built with a responsive design to make sure it worked on all devices.",
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
