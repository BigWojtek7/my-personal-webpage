const projectsArray = [
  {
    id: 1,
    name: 'The friendsBook',
    subtitle: 'React + NodeJS + SQL',
    image_screenshot: {
      image_url: '/images/portfolio-01/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-01/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro:
        'Mini facebook project in React and NodeJS with PostGreSQL database',
      body: 'Ability to create your account and add friends. Authentification with JWT token and passport. Database support with PostgreSQL without any OMD in SQL query training: Client-side React and responsive CSS layout in the CSS module.',
      ending:
        'This project taught me a lot when it comes to SQL and working with node passport for user authentication',
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/odin-book-frontend',
      backend: 'https://github.com/BigWojtek7/odin-book-backend',
    },
    live_url: 'https://odin-books.netlify.app/',
  },
  {
    id: 2,
    name: 'The blog API',
    subtitle: 'React + NodeJS + SQL',
    image_screenshot: {
      image_url: '/images/portfolio-02/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-02/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro: 'A blog application built as part of The Odin Project curriculum.',
      body: 'This web app allows users to view posts and, if logged in, comment on them. Admin users have additional permissions to add and delete posts, as well as delete comments.This is my model project, fully typed with TypeScript, where I focused on writing robust, maintainable code.',
      ending:
        'I also took application testing very seriously to ensure high-quality and reliable functionality.',
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/odin-react-blog-api',
      backend: 'https://github.com/BigWojtek7/odin-express-blog-api',
    },
    live_url: 'https://my-blog-api.netlify.app/',
  },
  {
    id: 3,
    name: 'My personal webpage',
    subtitle: 'React + CSS Modules',
    image_screenshot: {
      image_url: '/images/portfolio-03/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-03/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro:
        'My Personal Webpage is a fully responsive website showcasing my portfolio, projects, and professional journey.',
      body: "Built with HTML, CSS, and JavaScript, it includes an elegant and clean design focused on accessibility and user experience. The site highlights my skills, recent work, and the technologies I've mastered in web development. A contact form allows visitors to reach out directly, and the project pages provide detailed information on each project, including images, descriptions, and links to live demos or GitHub repositories.",
      ending:
        'Through this site, I aim to present my expertise in front-end development and my continuous learning journey.',
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/my-personal-webpage',
      backend: 'https://github.com/BigWojtek7/my-personal-webpage',
    },
    live_url: 'https://wojtek7.netlify.app/',
  },
  // {
  //   id: 4,
  //   name: 'The friendsBook',
  //   subtitle: 'React + NodeJS + SQL',
  //   image_screenshot: {
  //     image_url: '/images/portfolio-04.jpg',
  //     image_alt: 'Screenshot of my project',
  //   },
  //   image_details: {
  //     image_url: '/images/portfolio-details.jpg',
  //     image_alt: 'Screenshot of my project in landscape format',
  //   },
  //   description: {
  //     intro:
  //       'Mini facebook project in React and NodeJS with PostGreSQL database',
  //     body: 'Ability to create your account and add friends. Authentification with JWT token and passport. Database support with PostgreSQL without any OMD in SQL query training: Client-side React and responsive CSS layout in the CSS module.',
  //     ending:
  //       'This project taught me a lot when it comes to SQL and working with node passport for user authentication',
  //   },
  //   github_url: {
  //     frontend: 'https://github.com/BigWojtek7/odin-book-frontend',
  //     backend: 'https://github.com/BigWojtek7/odin-book-backend',
  //   },
  //   live_url: 'https://odin-books.netlify.app/',
  // },
  // {
  //   id: 5,
  //   name: 'The friendsBook',
  //   subtitle: 'React + NodeJS + SQL',
  //   image_screenshot: {
  //     image_url: '/images/portfolio-05.jpg',
  //     image_alt: 'Screenshot of my project',
  //   },
  //   image_details: {
  //     image_url: '/images/portfolio-01/detail.jpg',
  //     image_alt: 'Screenshot of my project',
  //   },
  //   description: {
  //     intro:
  //       'Mini facebook project in React and NodeJS with PostGreSQL database',
  //     body: 'Ability to create your account and add friends. Authentification with JWT token and passport. Database support with PostgreSQL without any OMD in SQL query training: Client-side React and responsive CSS layout in the CSS module.',
  //     ending:
  //       'This project taught me a lot when it comes to SQL and working with node passport for user authentication',
  //   },
  //   github_url: {
  //     frontend: 'https://github.com/BigWojtek7/odin-book-frontend',
  //     backend: 'https://github.com/BigWojtek7/odin-book-backend',
  //   },
  //   live_url: 'https://odin-books.netlify.app/',
  // },
  // {
  //   id: 6,
  //   name: 'The friendsBook',
  //   subtitle: 'React + NodeJS + SQL',
  //   image_screenshot: {
  //     image_url: '/images/portfolio-06.jpg',
  //     image_alt: 'Screenshot of my project',
  //   },
  //   image_details: {
  //     image_url: '/images/portfolio-01/detail.jpg',
  //     image_alt: 'Screenshot of my project',
  //   },
  //   description: {
  //     intro:
  //       'Mini facebook project in React and NodeJS with PostGreSQL database',
  //     body: 'Ability to create your account and add friends. Authentification with JWT token and passport. Database support with PostgreSQL without any ORM in SQL query training: Client-side React and responsive CSS layout in the CSS module.',
  //     ending:
  //       'This project taught me a lot when it comes to SQL and working with node passport for user authentication',
  //   },
  //   github_url: {
  //     frontend: 'https://github.com/BigWojtek7/odin-book-frontend',
  //     backend: 'https://github.com/BigWojtek7/odin-book-backend',
  //   },
  //   live_url: 'https://odin-books.netlify.app/',
  // },
];

export default projectsArray;
