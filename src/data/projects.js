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
      "Mellemrum is a fictional culture and event platform designed to make it easy for users in Aarhus to discover and register for concerts, talks, workshops and other cultural experiences. In this case, I took an existing React prototype and focused on making it more robust, accessible and maintainable. The goal was not to change everything, but to identify the improvements that would create the most value for both users and future development.",
    description: "---",
    category: ["Cases"],
    tags: [
      "React",
      "Frontend Development",
      "Supabase",
      "Backend",
      "Accessibility",
      "CRUD",
      "Software Architecture",
      "Error Handling",
      "API Integration",
    ],
    thumbnail: `${import.meta.env.BASE_URL}process/MR.png`,
    title1: "Identifying the Problems",
    image1: `${import.meta.env.BASE_URL}process/MR1.png`,
    process1:
      "The starting point was a functional prototype that had been set up as a base site, we could improve on. Several parts of the solution were not complete and functional for a finished product. The registration flow was unfinished, API requests did not consistently handle errors or slow responses, and the code contained duplicated data-fetching logic. There were also areas where accessibility, UI feedback and component responsibilities could be improved.The most important issue was the registration flow. The form collected registration data but did not actually complete the registration in Supabase. Since this is a central user flow, I prioritised making the core functionality work before focusing on more advanced optimisation.",
    title2: "Research and Priorities",
    image2: `${import.meta.env.BASE_URL}process/MR2.png`,
    process2:
      "I started by examining the existing application and its main user flows, using a technical audit to identify problems, their consequences and possible solutions. I prioritised improvements based on user impact, technical importance and maintainability rather than simply trying to change as much as possible. My implementation order was therefore: first complete the registration flow, then improve loading, error, success and empty states, followed by form accessibility and validation. After that, I focused on refactoring duplicated API logic and improving the React architecture. Performance, styling and production concerns were treated as later priorities. This approach also meant avoiding unnecessary complexity—for example, keeping client-side filtering because the current dataset did not justify moving it to the server.",
    title3: "The Implemented Solutions",
    image3: `${import.meta.env.BASE_URL}process/MR3.png`,
    process3:
      "I implemented a complete registration flow where submitted data is validated and sent to Supabase, with submission states and clear success or error feedback. The submit button is disabled during submission to prevent duplicate registrations. I also introduced clearer UI states for data requests, including loading, error and empty states, so the interface remains understandable when data is missing or a request fails. The registration form was improved with proper labels, input types, required fields and accessible feedback. On the code side, I worked towards a clearer separation between UI, pages and data access. Repeated Supabase configuration and request logic can be centralized into a shared API/service structure, making the code easier to maintain and extend. The architecture was kept intentionally simple rather than adding abstractions without a clear benefit.",
    reflection:
      "This case taught me that optimisation is not necessarily about making the biggest technical change. A small improvement to a central user flow can be more valuable than a large architectural refactor. I learned to prioritise based on impact and to consider different states—not only the successful scenario. I also became more aware of the connection between code quality and user experience. Proper error handling, accessibility and clear feedback are not separate from the functionality of an application; they are part of making the product reliable and usable. Finally, the case reinforced the importance of verifying improvements rather than assuming that a change works simply because the code runs.",
    links: [
      {
        label: "Live Site",
        href: "https://danielbilkvist.github.io/mellemrum/",
      },
      {
        label: "Github Repo",
        href: "https://github.com/danielbilkvist/mellemrum",
      },
      {
        label: "Technical Audit",
        href: "https://drive.google.com/file/d/1kkJI-utrjR05CUm0D10d6fXi-MQGiUqh/view?usp=sharing",
      },
    ],
  },

  {
    slug: "vuuh-case",
    title: "Vuuh",
    year: "Optimization Case",
    summary:
      "The project focused on improving the onboarding experience for Vuuh, a Shopify app that helps brands manage and transfer product data to their online store. The goal was to make the first-time experience clearer and help new users move from installing Vuuh to successfully connecting Shopify and creating their first demo product.",
    description: "---",
    category: ["Cases"],
    tags: [
      "Figma",
      "Onboarding",
      "Optimization",
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "User Centered Design",
      "Lottie",
      "Animations",
    ],
    thumbnail: `${import.meta.env.BASE_URL}process/VU.png`,
    title1: "Where the onboarding flow fails.",
    image1: `${import.meta.env.BASE_URL}process/VU1.png`,
    process1:
      "Our analysis showed that the existing onboarding flow created uncertainty at several important points. After installing Vuuh, users received unclear feedback that made it difficult to understand whether the installation had succeeded or what to do next. The dashboard was also visually busy, with information and actions that did not clearly communicate the intended order of the setup process. The Shopify connection flow introduced further friction. After clicking “Connect to Shopify”, users were sent to an Outputs page where they had to find Shopify and select it again before reaching the setup modal. This did not match the user's mental model and made a simple task feel more complicated than necessary. We also identified unclear terminology, technical form fields and missing error and empty states. Through a Heuristic Evaluation and Cognitive Walkthrough, we found that the biggest issues were related to system status, guidance, error recovery and the connection between Shopify, brands, products and the final result.",
    title2: "UX Audit and Priorities",
    image2: `${import.meta.env.BASE_URL}process/VU2.png`,
    process2:
      "We began with a UX audit using Jakob Nielsen's usability heuristics and a Cognitive Walkthrough based on a first-time Shopify user with basic Shopify knowledge but limited integration experience. The research revealed three key priorities: Create a clear transition from installation to Vuuh. Make the onboarding progression and next action visible. And reduce friction when connecting Shopify and demonstrating Vuuh's value. We used these findings to create Finding Cards and prioritize the problems that had the greatest impact on successful onboarding. We then translated the findings into design principles: guide users with one clear next step at a time, provide help in context, communicate system status clearly, and allow users to leave and return without losing progress.",
    title3: "The improved onboarding experience",
    image3: `${import.meta.env.BASE_URL}process/VU3.png`,
    process3:
      "The biggest change was the transition from installation to first use. Instead of leaving users on an unclear success/error screen, the redesigned experience confirms that Vuuh has been installed successfully and explains what happens next. A direct “Open Vuuh” CTA takes the user straight into the app. Inside the dashboard, we introduced a lightweight onboarding status showing where the user is, what has been completed and what remains. The Shopify connection can now be started directly from the dashboard, removing the unnecessary detour through the Outputs page. The Shopify setup was redesigned with clearer labels, contextual guidance and more understandable terminology. We also considered error recovery, contrast, focus states and consistent action copy to make the experience more accessible and robust. After connecting Shopify, the user is guided towards a demo product. The interface explains that the product is only a demonstration and uses clear loading and success states such as “Creating your demo product…” and “Your demo product is ready.” This gives the user a concrete confirmation that the integration works before moving on to connecting brands.",
    reflection:
      "This case taught me that effective onboarding is not just about reducing the number of steps. It is about making every step understandable and giving users confidence that they are moving in the right direction. A key learning was the importance of designing around the user's mental model rather than the structure of the system. By combining research findings with interaction design and accessibility considerations, I learned how small changes in feedback, terminology and progression can significantly reduce friction in a complex setup process. The project also strengthened my ability to turn UX research into concrete design decisions while keeping the focus on the user's goal: understanding the product and experiencing its value as quickly as possible.",
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?page-id=2137%3A198&node-id=2428-9026&viewport=603%2C167%2C0.11&t=fdG1AkPamuiHbcVR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2681%3A1421 ",
      },
      {
        label: "Figma Design File",
        href: "https://www.figma.com/design/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?node-id=2137-198&t=kolWtfdqTwtjFC7G-1",
      },
      {
        label: "UX Audit Summary",
        href: "https://www.figma.com/deck/1ZUGhZqIVvQELxucBe6Jci",
      },
      {
        label: "Presentation",
        href: "https://www.figma.com/deck/Fg2N624IMB5Grf1ESC9aNj",
      },
    ],
  },

  {
    slug: "la-rouge-case",
    title: "D'ocassion by La Rouge",
    year: "Optimization Case",
    summary:
      "D'ocassion is a concept for a new digital subbrand that gives  LA RŌUGE's existing secondhand initiative its own identity, tone of voice and user experience. The goal was to create a platform where customers could easily buy and return pre-owned LA RŌUGE styles. The subbrand is focussed on a younger generation where it can shine more with its femininity and originality, without comprising the timelessness and quality of the original brand.",
    description: "---",
    category: ["Cases"],
    tags: [
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "Re-Commerce",
      "Figma",
      "Branddeck",
    ],
    thumbnail: `${import.meta.env.BASE_URL}process/LR.png`,
    title1: "Research and Target Audience",
    image1: `${import.meta.env.BASE_URL}process/LR1.png`,
    process1:
      "LA RŌUGE already offered a secondhand option, but it was hidden in the shadows of the main brand. The experience lacked both identity and communication to the right target groups. Our research showed that secondhand was already a popular trend in Denmark among younger consumers, while most people actually selling and donating secondhand, aren't a big part of the secondhand consumers. The key challenge therefore became, how we could make it possible to make the re-commerce experience more relevant for both the new target group who are the consumers, and the old target group, who are the sellers. While maintaining a clear connection to LA RŌUGE.",
    title2: "Designing the New Visual Identity",
    image2: `${import.meta.env.BASE_URL}process/LR2.png`,
    process2:
      "We started by investigating the current secondhand market. We found current competing secondhand platforms like Vinted and MOS MOSH Reloved. Even though LA RŌUGE couldnt compete with Vinted on price or reach, it could penetrate the market through brand knowledge, simplicity and the convenience for both seller and buyer. The younger customer is looking for cheap quality pieces that can last both wear and trends. And the original customer who owns the used pieces, seeks a simple way to resell the styles they no longer use. From this we prioritised a low-effort process to trade in used styles and a strong visual brand. We went through an iterative design process for the new visual identity. Making different mood boards to find the perfect one. Then we found fonts, colors, formed a tone of voice and created a new logo, to match the new identity.",
    title3: "Prototyping the User Experience",
    image3: `${import.meta.env.BASE_URL}process/LR3.png`,
    process3:
      "The result was a fledged out concept for an endorsed subbrand with its own visual identity, while still being recognisably connected to LA RŌUGE. The new identity is allowed to be loud and rebellious to attract the younger audience, while still being recognisable as the original LA RŌUGE for the original customers. To visualise it we build a visual identity and prototype in figma. This both included a simple visual branddeck, atomic design and a working prototype that focussed on the two primary journeys of d'ocassion: selling and buying. The home page meets the user with a primary choice as the very first thing. Do you buy or do you wanna sell? This makes it possible to sort the two target groups correctly already from the start, so neither of them navigate to the wrong content.",
    reflection: "---",
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?page-id=225%3A3&node-id=274-3893&viewport=-187%2C154%2C0.06&t=xrwMi64fpLSdf5bK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=274%3A3893",
      },
      {
        label: "Design File",
        href: "https://www.figma.com/design/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=513-13539&t=Q0pYRaaBR5WWoo4R-1",
      },
      {
        label: "Brand Deck",
        href: "https://www.figma.com/design/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=721-6304&t=Q0pYRaaBR5WWoo4R-1",
      },
      {
        label: "Visual Presentation",
        href: "https://www.figma.com/deck/k9t9S5ReQ6FOBMath4fX5P",
      },
    ],
  },

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
