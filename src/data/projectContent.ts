import { v4 as uuid } from 'uuid'

export type Project = {
  id: string;
  title: string;
  fullStack: boolean;
  mainTechnology: string[];
  otherTechnology: string[];
  intro: string[];
  img: string[];
  url: string;
  gitHubUrl: string;
  planningUrl: string;
}

export const projects: Array<Project> = [
  {
    id: uuid(),
    fullStack: true,
    title: 'Happy Tails',
    mainTechnology: ['TypeScript', 'React Native', 'Fastify', 'MongoDB'],
    otherTechnology: ['React Query', 'Zustand', 'Git/GitHub', ],
    intro: ['Mobile pet app for managing your pet care and health efficiently, ensuring you never miss any important tasks or appointments.'],
    img: ['/assets/images/happy-tails.png'],
    url: '',
    gitHubUrl: 'https://github.com/kalyntn97/happy-tails-frontend',
    planningUrl: 'https://trello.com/b/IyeEEYJA/happytails',
  },
  {
    id: uuid(),
    fullStack: false,
    title: 'Happy Tails Web',
    mainTechnology: ['TypeScript', 'NextJS', 'TailwindCSS'],
    otherTechnology: ['Framer Motion', 'EmailJS'],
    intro: ['Landing page for Happy Tails, a mobile pet app for managing pet care and health'],
    img: ['public/assets/images/happy-tails-web.png'],
    url: 'https://happy-tails-website.vercel.app/',
    gitHubUrl: 'https://github.com/kalyntn97/happy-tails-website',
    planningUrl: 'https://www.figma.com/design/MJtp0vcbfqSn9D63rJ765x/Happy-Tails-Website?node-id=0-1&t=1BmvTmFC1LajX8vk-0',
  },
  {
    id: uuid(),
    title: 'PlanPal',
    fullStack: true,
    mainTechnology: ['MongoDB', 'Express', 'Node.js', 'JavaScript'],
    otherTechnology: ['EJS', 'Mongoose', 'CSS3', 'HTML5', 'fly.io', 'Git/GitHub'],
    intro: ['The go-to app for seamless and stress-free event coordination with friends.'],
    img: ['/assets/images/planpal.png'],
    url: 'https://planpal.fly.dev/',
    gitHubUrl: 'https://github.com/kalyntn97/PlanPal',
    planningUrl: 'https://trello.com/b/ypMyZC8Z/palplan',
  },
  {
    id: uuid(),
    title: 'Wandr',
    fullStack: true,
    mainTechnology: ['MongoDB', 'Express', 'ReactJS', 'Node.js', 'JavaScript'],
    otherTechnology: ['Mongoose', 'CSS3', 'HTML5',  'Cloudinary', 'fly.io', 'Netlify','Git/GitHub'],
    intro: ['Explore diverse cultures, landscapes, and create lasting memories'],
    img: ['/assets/images/wandr.png'],
    url: 'https://main--wandr-sei.netlify.app/',
    gitHubUrl: 'https://github.com/kalyntn97/wandr-front-end',
    planningUrl: 'https://trello.com/b/CDqA4iHA/wandr',
  },
  { 
    id: uuid(),
    title: 'ReadIt',
    fullStack: true,
    mainTechnology: ['Python', 'Django'],
    otherTechnology: ['JavaScript', 'Neon', 'CSS', 'Git/GitHub', 'HTMl5', 'fly.io'],
    intro: ['The app where the art of note-taking meets the ease of organization, creating a symphony of productivity for daily life.'],
    img: ['/assets/images/readit.png'],
    url: 'https://readit.fly.dev/',
    gitHubUrl: 'https://github.com/kalyntn97/ReadIt',
    planningUrl: 'https://trello.com/b/d2BMfOBF/readit',
  },
  {
    id: uuid(),
    title: 'Portfolio',
    fullStack: false,
    mainTechnology: ['TypeScript', 'ReactJS'],
    otherTechnology: ['SCSS', 'Framer Motion', 'Netlify', 'Git/GitHub', 'HTML5'],
    intro: ['A personal portfolio that showcases a visual narrative of a creative journey and expertise'],
    img: ['/assets/images/portfolio.png'],
    url: '',
    gitHubUrl: 'https://github.com/kalyntn97/tran-portfolio.git',
    planningUrl: 'https://trello.com/b/hdbCUibc/personal-portfolio',
  },
  {
    id: uuid(),
    title: 'TetraZoo',
    fullStack: false,
    mainTechnology: ['HTML5', 'JavaScript'],
    otherTechnology: ['CSS3', 'Netlify', 'Git/GitHub'],
    intro: ['Classic tile-matching puzzle Tetris meets adorable creatures from the animal kingdom'],
    img: ['/assets/images/tetrazoo.png'],
    url: 'https://tetrazoo-kalyn.netlify.app/',
    gitHubUrl: 'https://github.com/kalyntn97/tetrazoo',
    planningUrl: 'https://docs.google.com/document/d/14vgdRwFpuD-XCJo9-QbgvL-OANyUfkukdQmyj2sftfI/edit#heading=h.wpp7ttkmo633',
  },
]