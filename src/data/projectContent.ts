import { v4 as uuid } from 'uuid'

export type Project = {
  id: string;
  title: string;
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
    title: 'TetraZoo',
    mainTechnology: ['HTML5', 'JavaScript'],
    otherTechnology: ['CSS3', 'Netlify', 'Git/GitHub'],
    intro: ['Classic tile-matching puzzle Tetris meets adorable creatures from the animal kingdom'],
    img: ['/assets/images/tetrazoo.png'],
    url: 'https://tetrazoo-kalyn.netlify.app/',
    gitHubUrl: 'https://github.com/kalyntn97/tetrazoo',
    planningUrl: 'https://docs.google.com/document/d/14vgdRwFpuD-XCJo9-QbgvL-OANyUfkukdQmyj2sftfI/edit#heading=h.wpp7ttkmo633',
  },
  {
    id: uuid(),
    title: 'PlanPal',
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
    mainTechnology: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
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
    title: 'Tran Nguyen',
    mainTechnology: ['Typescript', 'React'],
    otherTechnology: ['SCSS', 'Framer Motion', 'Netlify', 'Git/GitHub', 'HTML5'],
    intro: ['A personal portfolio that showcases a visual narrative of a creative journey and expertise'],
    img: ['/assets/images/portfolio.png'],
    url: '',
    gitHubUrl: 'https://github.com/kalyntn97/tran-portfolio.git',
    planningUrl: 'https://trello.com/b/hdbCUibc/personal-portfolio',
  },
  // {
  //   id: uuid(),
  //   title: 'Placeholder',
  //   mainTechnology: [],
  //   otherTechnology: [],
  //   intro: [],
  //   img: [],
  //   url: '',
  //   gitHubUrl: '',
  //   planningUrl: '',
  // },
]