export const en = {
  nav: {
    home: 'Home',
    services: 'What I do',
    about: 'About me',
    portfolio: 'My Portfolio',
  },
  intro: {
    title: 'Hi, I am',
    subtitle: 'Frontend Developer',
    cta: 'My Work',
    projectTitle: 'Project #',
  },
  services: {
    title: 'What I Do',
    development: 'Frontend Development',
    responsive: 'Responsive Design',
    optimization: 'Performance Optimization',
    descriptions: {
      frontend:
        'I believe in mastering the core web technologies—HTML, CSS, and JavaScript—as they form the foundation of web development, even in an era dominated by frameworks. Recently, I have expanded my skill set to include TypeScript, leveraging its type safety and developer tooling to create more robust and maintainable code.',
      react:
        "React's component-based architecture allows me to create modular, reusable code with ease. I pair React with CSS Modules to organize projects into easily manageable parts, ensuring both high code quality and readability.",
      backend:
        'While my primary focus is on the front end, my experience with Node.js and databases like PostgreSQL and MongoDB has deepened my understanding of APIs, data security, and server-side data handling. This background enhances my ability to design effective and secure client-side applications.',
    },
  },
  about: {
    title: 'Who I am',
    subtitle:
      'Full Stack Developer passionate about exploring new technologies',
    description:
      'I have always dreamed of creating impactful web applications, and the Harvard CS50P course ignited my passion for development. This Python-based course, followed by the CS50X course in C language, gave me a strong foundation in programming principles and memory management, which later enhanced my understanding of JavaScript and modern web technologies.',
    journey:
      'My journey continued with The Odin Project, where I expanded my front-end skills and developed a strong grasp of FlexBox and Grid. Working in CSS has become a source of satisfaction, especially as I have honed my expertise in React, Node.js, and PostgreSQL. Today, I am skilled in using modern JavaScript frameworks and libraries to create efficient, responsive, and user-friendly web applications.',
  },
  portfolio: {
    title: 'My Projects',
    subtitle: 'My Selected Projects',
    viewProject: 'View Project',
    projects: {
      eshop: {
        id: 'eshop',
        name: 'E-Shop',
        subtitle: 'Next + Tailwind + SQL',
        intro:
          'E-Shop is a modern e-commerce application built using Next.js, offering server-side rendering capabilities.',
        body: ' The project leverages TypeScript to ensure type safety and improve code maintainability. Tailwind CSS is used for efficient and responsive UI styling. NextAuth handles secure user authentication and authorization processes. Prisma serves as the ORM, simplifying database interactions with PostgreSQL.The application includes a shopping cart where users can add, update, or remove items. Orders are processed seamlessly and stored in the PostgreSQL database for tracking. ',
        ending:
          'The platform allows users to view their order history and manage their profiles, including updating avatars. The responsive design ensures optimal usability on both mobile and desktop devices.',
      },
      friendsBook: {
        id: 'friendsbook',
        name: 'The friendsBook',
        subtitle: 'React + NodeJS + SQL',
        intro:
          'Mini facebook project in React and NodeJS with PostGreSQL database',
        body: 'Ability to create your account and add friends. Authentification with JWT token and passport. Database support with PostgreSQL without any OMD in SQL query training: Client-side React and responsive CSS layout in the CSS module.',
        ending:
          'This project taught me a lot when it comes to SQL and working with node passport for user authentication',
      },
      blog: {
        id: 'blog',
        name: 'The blog API',
        subtitle: 'React + NodeJS + SQL',
        intro:
          'A blog application built as part of The Odin Project curriculum.',
        body: 'This web app allows users to view posts and, if logged in, comment on them. Admin users have additional permissions to add and delete posts, as well as delete comments. This is my model project, fully typed with TypeScript, where I focused on writing robust, maintainable code.',
        ending:
          'I also took application testing very seriously to ensure high-quality and reliable functionality.',
      },
      portfolio: {
        id: 'portfolio',
        name: 'My personal webpage',
        subtitle: 'React + CSS Modules',
        intro:
          'My Personal Webpage is a fully responsive website showcasing my portfolio, projects, and professional journey.',
        body: "Built with HTML, CSS, and JavaScript, it includes an elegant and clean design focused on accessibility and user experience. The site highlights my skills, recent work, and the technologies I've mastered in web development. A contact form allows visitors to reach out directly, and the project pages provide detailed information on each project, including images, descriptions, and links to live demos or GitHub repositories.",
        ending:
          'Through this site, I aim to present my expertise in front-end development and my continuous learning journey.',
      },
    },
    buttons: {
      frontend: 'Frontend',
      backend: 'Backend',
      live: 'Live',
    },
  },
};
