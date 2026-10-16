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
      "The starting point was a functional react project, that had been set up as a base we could improve on. Several parts of the page were not functional nor complete. The registration flow was not working, API requests weren't handling errors or slow loading times, the code structure was unmanageable  and contained duplicated data-fetching logic. The page was missing accessibility optimization and ui feedback in multiple places. To identify and form a total overview, I created a technical audit that identified the problems, an idea on how to fix it and how important the change was for the site's functionality. This led to the biggest issue, which was the lack of database connections, so every event registration was logged instead of handled by a database. Since this is the core function of the page, it was where I started.",
    title2: "Research and Priorities",
    image2: `${import.meta.env.BASE_URL}process/MR2.png`,
    process2:
      "To solve the critical issues of the technical audit, I created a Supabase project to connect to the platform. This opened the possibility for solving the registration flow. With a registration table, future registrations could now be saved directly, and later called to show the organizers how many registrations they had actually received. Cored function fixed. Next up, Supabase made it possible to minimize duplicate data. By using a foreign key, the registrations could fetch event data directly from the event table. And similarly the event table could fetch the venue data from the venue table. This makes maintenance and future development and event/venue additions easy to handle and edit. Connected to data management, I found it important to implement a strong error-handling that reliably could inform the user of the site's state and make sure to let the user know, if something went wrong while handling data, to make sure they aren't left unaware. To further strengthen the maintenance and development of the page, I created a stronger semantic structure. This includes map structure, function delegation and components to avoid code repetition and dividing the global css into scoped css modules.",
    title3: "The Implemented Solutions",
    image3: `${import.meta.env.BASE_URL}process/MR3.png`,
    process3:
      "With a strong and robust backend, the next important changes all regarded optimizing the UI. When a user signed up for an event, the page did not give a response. This would give issues with multiple or wrong registrations. So a small system response was added to tell the user that the registration was successful and the submit button was disabled during submission to prevent duplicate registrations. The loading UI also needed a modern update, so a standard skeleton loading state was added to improve the visual loading state. Lastly a cosmetic login option was added, to visualize the importance of keeping the users information safe from public access. So only organizers should be able to access the registration data. Since it wasn't in the case scope, actual authentication has been de-prioritized.",
    reflection:
      "This case taught me that optimisation is not necessarily about making more functions and better designs. But about improving the core functions and adding visual states to guide and update the user. During the 2 weeks I worked on Mellemrum, almost nothing changed visually from the original platform. It was strange to write so many new lines of code, and not be able to see it when looking at the visual product. But to then use the version with improved backend and UX/UI design, taught me to prioritise and value the importance of a strong quality code, tailored to support all possible scenarios that the user could expose the product to.",
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
    title1: "Where the onboarding flow fails",
    image1: `${import.meta.env.BASE_URL}process/VU1.png`,
    process1:
      "Our analysis showed that the existing onboarding flow created uncertainty at several important points. After installing Vuuh, users received unclear feedback that made it difficult to understand whether the installation had succeeded and what to do next. The dashboard was also visually busy, with information and actions that did not clearly communicate the intended order of the setup process. The Shopify connection flow introduced further friction. After clicking “Connect to Shopify”, users were sent to an Outputs page where they had to find Shopify and select it again before reaching the setup modal. This did not match the user's mental model and made a simple task feel more complicated than necessary. We also identified unclear terminology, technical form fields and missing error and empty states. Through a Heuristic Evaluation and Cognitive Walkthrough, we found that the biggest issues were related to system status, guidance, error recovery and the connection between Shopify and Vuuh.",
    title2: "UX Audit and Priorities",
    image2: `${import.meta.env.BASE_URL}process/VU2.png`,
    process2:
      "We began with a UX audit using Jakob Nielsen's usability heuristics and a Cognitive Walkthrough based on an amateur Shopify user with basic Shopify knowledge but limited integration experience. The research revealed three key priorities: Create a clear transition from installation to Vuuh. Make the onboarding progression and next action visible. And reduce friction when connecting Shopify and demonstrating Vuuh's value. We used these findings to create Finding Cards and prioritize the problems that had the greatest impact on successful onboarding. We then translated the findings into design principles: guide users with one clear next step at a time, provide help in context, communicate system status clearly, and allow users to leave and return without losing progress.",
    title3: "The improved onboarding experience",
    image3: `${import.meta.env.BASE_URL}process/VU3.png`,
    process3:
      "The biggest change was the transition from installation to first use. Instead of leaving users on an unclear success/error screen, the redesigned experience confirms that Vuuh has been installed successfully and explains what happens next. A direct “Open Vuuh” CTA takes the user straight into the app. Inside the dashboard, we introduced a lightweight onboarding status showing where the user is, what has been completed and what remains. The Shopify connection can now be started directly from the dashboard, removing the unnecessary detour through the Outputs page. The Shopify setup was redesigned with clearer labels, contextual guidance and more understandable terminology. We also considered error recovery, contrast, focus states and consistent action copy to make the experience more accessible and robust. After connecting Shopify, the user is guided towards a demo product. The interface explains that the product is only a demonstration and uses clear loading and success states such as “Creating your demo product” and “Your demo product is ready.” This gives the user concrete confirmation that the integration works before moving on to connecting brands.",
    reflection:
      "This case taught me that effective onboarding is not just about reducing the number of steps. It is about making every step understandable and giving users confidence that they are moving in the right direction. A key learning was the importance of designing around the user's mental model rather than the structure of the system. By combining research findings with interaction design and accessibility considerations, I learned how small changes in feedback, terminology and progression can significantly reduce friction in a complex setup process. The project also strengthened my ability to turn UX research into design decisions while keeping the focus on the user's goal.",
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
    title1: "A subbrand for who?",
    image1: `${import.meta.env.BASE_URL}process/LR1.png`,
    process1:
      "Through desk research on secondhand and re-commerce, we discovered a new consumer for secondhand LA RŌUGE, different from the one they had. The current target group is currently both supplying LA RŌUGE with used pieces, but are also expected to buy them. Research showed that the younger generation consumes much more secondhand fashion, since they prioritise price more than the current target group, who choose LA RŌUGE for quality timelessnes. A major threat on the second hand market is vinted, both for consumers and sellers. The best opportunity for LA RŌUGE would be to create a subbrand that lets the younger consumers buy trusted, unique and quality clothes at a lower price. While still appealing to the older group who works as suppliers. They want to, reliably and without friction, trade in their unused clothes, and would be happy with reinvesting in new LA RŌUGE pieces.",
    title2: "A Branded House",
    image2: `${import.meta.env.BASE_URL}process/LR2.png`,
    process2:
      "Since we decided to still appeal to both target groups, we made  a branded house. This meant that d'ocassion had to be visually related to LA RŌUGE. We wanted to tap into the strong identity of the LA RŌUGE brand and its creator. She's a strong individual who ties back to rødstrømpebevægelsen. With a new younger target group, we tried to channel the sharp feminine energy, bluntness and rebellious tone of the feminist movement. From the adjectives, we worked out multiple moodboard to find the right vibe. Even trying to revisit the chic french aesthetic of the original LA RŌUGE. We found a perfect balance between loudly rebellious and authentically chic. This made it possible to both appeal to both groups.",
    image3: `${import.meta.env.BASE_URL}process/LR3.png`,
    process3:
      "Through our visual identity, we focused on keeping this balance. Our title font represents French elegance, with a contrasting font which was loud, attention seeking and symbolised lipstick aggressively smeared on a mirror. We created a new tone of voice from the existing one, where we tweaked a couple factors. The new brand is less formal and much more rebellious, enthusiastic and personal. We emphasized the tone of voice with a specific image style. We use more down to earth and social settings, also matching LA RŌUGE's wish for every woman to feel good with being themself. To visualise the concept, we build a design system and prototype in figma. This both included atomic design and a working prototype that focussed on the two primary journeys of d'ocassion: selling and buying. The home page meets the user with a primary choice as the very first thing. Do you buy or do you wanna sell? This makes it possible to sort the two target groups correctly already from the start, so neither of them navigate to the wrong content.",
    reflection: "An overall very fun project. It was exciting to find the perfect balance between the two target groups. I learned a lot about visual identity, and the importance of personalizing products to make a strong brand. Especially when trying to make a subbrand to an already strong personality. I found out how a branded house can appeal to different demographics, while being able to pull on the strong aspects of the original brand. We also dabbled with the idea of creating a brand that was more than just pieces of clothing. Maybe receiving a pair of red socks to represent the feminist movement would create a community of individuals with a common goal of being their unapologetic selves.",
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
