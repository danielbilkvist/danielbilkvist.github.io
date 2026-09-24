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
    title1: "Target Audience and Research",
    image1: `${import.meta.env.BASE_URL}process/CE1.png`,
    process1:
      "I started by analysing the target audience through segmentation, a Value Proposition Canvas and desk research. Interviews were then used to identify user needs, motivations and friction points, giving the project a clear user-focused foundation.",

    title2: "User Insights and Structure",
    image2: `${import.meta.env.BASE_URL}process/CE2.png`,
    process2:
      "Based on the research, I translated user insights into How Might We questions and structured the website using OOUX. This helped define the key objects, relationships and actions needed throughout the webshop.",

    title3: "User Flow and Wireframes",
    image3: `${import.meta.env.BASE_URL}process/CE3.png`,
    process3:
      "I created user and task flows around key shopping scenarios before developing Low-Fidelity wireframes. This helped establish the information architecture and create a clear path from discovering a product to completing a purchase.",

    title4: "Visual Identity and Design System",
    image4: `${import.meta.env.BASE_URL}process/CE4.png`,
    process4:
      "I developed the visual identity based on the target audience and brand direction. The design system defined colours, typography, spacing and visual elements to create a consistent and recognisable interface.",

    title5: "Iterative Prototyping",
    image5: `${import.meta.env.BASE_URL}process/CE5.png`,
    process5:
      "The design was developed iteratively in Figma, starting with Low-Fidelity prototypes and progressing to a High-Fidelity prototype. Components, Auto Layout and variables were introduced to make the design scalable and consistent.",

    title6: "User Testing and Refinement",
    image6: `${import.meta.env.BASE_URL}process/CE6.png`,
    process6:
      "The prototype was tested using Think Aloud testing with 8 participants. The results revealed navigation issues, leading to changes such as removing the Category Navbar and increasing the contrast of navigation links.",

    title7: "React Development",
    image7: `${import.meta.env.BASE_URL}process/CE7.png`,
    process7:
      "The final design was translated into a functional webshop using React and Vite. I worked with reusable components, props, state, conditional rendering and React Router to create a structured and dynamic application.",

    title8: "Final Product",
    image8: `${import.meta.env.BASE_URL}process/CE8.png`,
    process8:
      "The final product is a responsive streetwear webshop with a component-based structure and dynamic product data. The implementation connects the research, UX decisions and visual design into a functional user-focused experience.",
    links: [
      {
        label: "Live site",
        href: "https://magecties.github.io/customer-experience-exam/",
      },
      {
        label: "Github Repo",
        href: "https://github.com/Magecties/customer-experience-exam",
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
    title1: "Evaluating the existing prototype",
    image1: `${import.meta.env.BASE_URL}process/SC1.png`,
    process1:
      "First i evaluated the existing protoype using Heuristic Evaluation to identify usability and design issues. The most common issues were related to Visibility of System Status and Consistency and Standards. The evaluation showed me where i had to proritize my work and make improvements to the design.",
    title2: "Task Flow and Flowchart",
    image2: `${import.meta.env.BASE_URL}process/SC2.png`,
    process2:
      "Following the first step i formed a Flowchart and Task Flow to identify the central function that had to be improved. My main focus landed on the login page, game cards, profile functions and favorite library. The Task Flow made the users path through the website clear.",
    title3: "Low-Fidelity Wireframes",
    image3: `${import.meta.env.BASE_URL}process/SC3.png`,
    process3:
      "It was now possible to create Low-Fidelity wireframes based on the previous prototype and the newly formed Task Flow. Figma was used for the wireframing and formed the visual process of the users journey.",
    title4: "First Prototype",
    image4: `${import.meta.env.BASE_URL}process/SC4.png`,
    process4:
      "From the Low-Fidelity wireframes i created the first Prototype. It combines all of the new learnings with the previous design. Key changes was a constant Navigation bar which was always accesible for the user. As well as a clear indicator of the users current Location.",
    title5: "User Tests",
    image5: `${import.meta.env.BASE_URL}process/SC5.png`,
    process5:
      "The new design was exposed to numerous Think Aloud Tests to make sure the new navigation and usability was clear and easy for users to understand. The test showed new issues with button touch points which was fixed for the final design.",
    title6: "A conmsistent Design System",
    image6: `${import.meta.env.BASE_URL}process/SC6.png`,
    process6:
      "To prepare for the final design i created a Design System to make sure the visual identity was consistent across the entire website. The Design System included colors, typography, buttons, icons and other visual elements that were used throughout the website.",
    title7: "Final Prototype",
    image7: `${import.meta.env.BASE_URL}process/SC7.png`,
    process7:
      "When designing the final protype UX-Laws like Jakobs Law, Fitts Law and Gestalt principles were used to make sure the design stayed intuitve and user friendly.",
    title8: "Final Product",
    image8: `${import.meta.env.BASE_URL}process/SC8.png`,
    process8:
      "The final design was translated to a working Website using HTML, CSS and JavaScript. The website   was built with a responsive design to make sure it worked on all devices.",
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
    title1: "Target Audience and Research",
    image1: `${import.meta.env.BASE_URL}process/WA1.png`,
    process1:
      "The project began with desk research, target group analysis and personas focused on young adults living with roommates. Research uncovered challenges related to shared responsibilities, lack of structure and low motivation for household tasks, creating a strong user-centered foundation.",
    title2: "User Needs and Problem Definition",
    image2: `${import.meta.env.BASE_URL}process/WA2.png`,
    process2:
      "Research insights were translated into User Needs, questionnaires and How Might We questions. This helped define the core problems around motivation, task distribution and household coordination while identifying opportunities for gamification and transparency.",
    title3: "Feature Prioritisation and Information Architecture",
    image3: `${import.meta.env.BASE_URL}process/WA3.png`,
    process3:
      "Useberry testing, Card Sorting and User Story Mapping were used to prioritise features and structure the application. These activities defined tasks, shopping lists and calendar functionality as the primary user journeys while shaping the overall information architecture.",
    title4: "User Flows and Wireframes",
    image4: `${import.meta.env.BASE_URL}process/WA4.png`,
    process4:
      "Before developing the visual design, wireframes were created to establish page structure, navigation patterns and content hierarchy. The focus was on creating simple and intuitive flows that support quick and frequent use in busy households.",
    title5: "Visual Identity and Design System",
    image5: `${import.meta.env.BASE_URL}process/WA5.png`,
    process5:
      "A playful visual identity centred around the Hoomie mascot was developed to differentiate the product and strengthen engagement. Colours, typography, spacing units and reusable UI components were organised into a scalable design system within Figma.",
    title6: "Interactive Prototyping and Evaluation",
    image6: `${import.meta.env.BASE_URL}process/WA6.png`,
    process6:
      "The design evolved into an interactive Figma prototype using components, variants and overlays to simulate real interactions. A heuristic evaluation based on Nielsen’s usability principles was conducted to identify usability issues before user testing.",
    title7: "User Testing and Refinement",
    image7: `${import.meta.env.BASE_URL}process/WA7.png`,
    process7:
      "Think Aloud testing was performed to validate navigation, functionality and overall usability. The testing revealed opportunities to improve system feedback, onboarding, invitations and calendar interactions, leading to refinements of the prototype.",
    title8: "React Development and Final Product",
    image8: `${import.meta.env.BASE_URL}process/WA8.png`,
    process8:
      "The final solution was developed as a Single Page Application using React, React Router and Supabase. Reusable components, state management, CRUD functionality and database integration transformed the UX and UI design into a fully functional household management application.",
    links: [
      {
        label: "Live Site",
        href: "https://sebbbenator.github.io/hoomie/task",
      },
      {
        label: "Github Repo",
        href: "https://github.com/Sebbbenator/hoomie",
      },
    ],
  },

  // {
  //   slug: "WantedArchivesInstagram",
  //   title: "Wanted Archives Instagram",
  //   year: "Social Media",
  //   summary:
  //     "As part of the Wanted Archives Project, a social media profile was made for Instagram. Its purpose was to show how the fictional brand would be branded and marketed on social media through posts and stories.",
  //   description: "---",
  //   category: ["Minor Creations"],
  //   tags: [
  //     "Social Media Marketing",
  //     "Instagram",
  //     "Branding",
  //     "Premier Pro",
  //     "Video Editing",
  //   ],
  //   thumbnail: `${import.meta.env.BASE_URL}process/WantedInsta.png`,
  //   image1: `${import.meta.env.BASE_URL}process/WantedInsta2.png`,
  //   process1:
  //     "This was my first go trying to design a page for a fictional viral clothing brand. We used current trends and inspiration from similiar brands to create content that would be relevant for the target audience.",
  //   links: [
  //     {
  //       label: "Instagram",
  //       href: "https://www.instagram.com/wanted.archives/",
  //     },
  //   ],
  // },

  {
    slug: "mellemrum-case",
    title: "Mellemrum",
    year: "Optimization Case",
    summary:
      "A case to improve the digital event platform Mellemrum. The goal was to improve the user experience, accessibility and overall usability of the platform. The project was built with React and Supabase.",
    description: "---",
    category: ["Cases"],
    tags: [
      "Optimization",
      "React",
      "Supabase",
      "Backend",
      "Accessibility",
      "CRUD",
      "Semantic Structure",
    ],
    thumbnail: `${import.meta.env.BASE_URL}process/MR.png`,
    image1: `${import.meta.env.BASE_URL}process/MR1.png`,
    process1:
      "I had a focus on improving error handling, supabase connection, CRUD, and overall semantic structure of the React project.",
    links: [
      {
        label: "Live Site",
        href: "https://danielbilkvist.github.io/mellemrum/",
      },
      {
        label: "Github Repo",
        href: "https://github.com/danielbilkvist/mellemrum",
      },
    ],
  },

  {
    slug: "vuuh-case",
    title: "Vuuh",
    year: "Optimization Case",
    summary:
      "We were presented to the onboarding flow of the Vuuh application for Shopify. The goal was to improve the onboarding flow and make it more user friendly for the target audience to optimize the conversion rate.",
    description: "---",
    category: ["Cases"],
    tags: [
      "Figma",
      "Onboarding",
      "Optimization",
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "Lottie",
      "Animations",
    ],
    thumbnail: `${import.meta.env.BASE_URL}process/VU.png`,
    image1: `${import.meta.env.BASE_URL}process/VU1.png`,
    process1:
      "The project was created as a Figma Protoype following the Brand Guidelines of Vuuh. We used Progress Tracker, Loading States, System Response, In Context Guidance and Lottie Animations to improve the first time user experience.",
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?page-id=2137%3A198&node-id=2428-9026&viewport=603%2C167%2C0.11&t=fdG1AkPamuiHbcVR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2681%3A1421 ",
      },
      {
        label: "Figma Design File",
        href: "https://www.figma.com/design/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?node-id=2137-198&t=kolWtfdqTwtjFC7G-1",
      },
    ],
  },

  // {
  //   slug: "la-rouge-case",
  //   title: "La Rouge",
  //   year: "Optimization Case",
  //   summary:
  //     "A case study of the La Rouge project, focusing on the design and development process.",
  //   description: "---",
  //   category: ["Cases"],
  //   tags: ["UI/UX Design", "Prototyping", "User Research"],
  //   thumbnail: `${import.meta.env.BASE_URL}process/Vuuh.png`,
  //   image1: `${import.meta.env.BASE_URL}process/Vuuh2.png`,
  //   process1:
  //     "This case study explores the design and development of the Vuuh project, highlighting the challenges and solutions encountered during the process.",
  //   links: [
  //     {
  //       label: "Figma Prototype",
  //       href: "https://www.figma.com/proto/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?page-id=2137%3A198&node-id=2428-9026&viewport=603%2C167%2C0.11&t=fdG1AkPamuiHbcVR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2681%3A1421 ",
  //     },
  //   ],
  // },

  {
    slug: "takenow",
    title: "TakeNOW.dk",
    year: "Website Contribution",
    summary:
      "Ive made minor contributions to the website TakeNOW.dk, as part of a multi focused job where i helped with both the website, stock, new products and physcial media.",
    description: "---",
    category: ["Contributions"],
    tags: ["Wordpress", "Elementor"],
    thumbnail: `${import.meta.env.BASE_URL}Takenow.png`,
    image1: `${import.meta.env.BASE_URL}process/TN1.png`,
    process1:
      " This was my first time working in wordpress and Elementor, and i learned alot about the tool and how its usefull compared to hard coding.",
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
    category: ["Contributions"],
    tags: ["Shopify"],
    thumbnail: `${import.meta.env.BASE_URL}Unyttigt.png`,
    image1: `${import.meta.env.BASE_URL}process/UD1.png`,
    process1:
      "This was my first time working on a already build Shopify Page. I helped adding new products and creating a new and more userfriendly layout and design for the website.",
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
      "Ive helped to keep the website Bedsteven.dk up to date with new products, stock and orders. The website is built on Shopify.",
    description: "---",
    category: ["Contributions"],
    tags: ["Shopify"],
    thumbnail: `${import.meta.env.BASE_URL}Bedsteven.png`,
    image1: `${import.meta.env.BASE_URL}process/BV1.png`,
    process1:
      "My second time working on a already construct Shopify Page. Since this page was properly build i mostly added new products and handled the orders that was placed on the website.",
    links: [
      {
        label: "Website",
        href: "https://bedsteven.dk/",
      },
    ],
  },
];

export default projects;
