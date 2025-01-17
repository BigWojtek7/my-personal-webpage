import { en } from '../../locales/en';

const projectsArray = [
  {
    id: 1,
    projectId: 'friendsbook',
    name: en.portfolio.projects.friendsBook.name,
    subtitle: en.portfolio.projects.friendsBook.subtitle,
    image_screenshot: {
      image_url: '/images/portfolio-01/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-01/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro: en.portfolio.projects.friendsBook.intro,
      body: en.portfolio.projects.friendsBook.body,
      ending: en.portfolio.projects.friendsBook.ending,
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/odin-book-frontend',
      backend: 'https://github.com/BigWojtek7/odin-book-backend',
    },
    live_url: 'https://odin-books.netlify.app/',
  },
  {
    id: 2,
    projectId: 'blog',
    name: en.portfolio.projects.blog.name,
    subtitle: en.portfolio.projects.blog.subtitle,
    image_screenshot: {
      image_url: '/images/portfolio-02/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-02/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro: en.portfolio.projects.blog.intro,
      body: en.portfolio.projects.blog.body,
      ending: en.portfolio.projects.blog.ending,
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/odin-react-blog-api',
      backend: 'https://github.com/BigWojtek7/odin-express-blog-api',
    },
    live_url: 'https://my-blog-api.netlify.app/',
  },
  {
    id: 3,
    projectId: 'portfolio',
    name: en.portfolio.projects.portfolio.name,
    subtitle: en.portfolio.projects.portfolio.subtitle,
    image_screenshot: {
      image_url: '/images/portfolio-03/screen.jpg',
      image_alt: 'Screenshot of my project',
    },
    image_details: {
      image_url: '/images/portfolio-03/detail.jpg',
      image_alt: 'Screenshot of my project',
    },
    description: {
      intro: en.portfolio.projects.portfolio.intro,
      body: en.portfolio.projects.portfolio.body,
      ending: en.portfolio.projects.portfolio.ending,
    },
    github_url: {
      frontend: 'https://github.com/BigWojtek7/my-personal-webpage',
      backend: 'https://github.com/BigWojtek7/my-personal-webpage',
    },
    live_url: 'https://wojtek7.netlify.app/',
  },
];

export default projectsArray;
