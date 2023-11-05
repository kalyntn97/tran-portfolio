import { v4 as uuid } from 'uuid'

export type Project = {
  id: number;
  title: string;
  languages: string[];
  technology: string[];
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
    languages: ['HTML5', 'JavaScript'],
    technology: ['CSS3', 'Netlify', 'Git/GitHub'],
    intro: ['Classic tile-matching puzzle Tetris meets adorable creatures from the animal kingdom'],
    img: ['src/assets/images/tetrazoo.png'],
    url: 'https://tetrazoo-kalyn.netlify.app/',
    gitHubUrl: 'https://github.com/kalyntn97/tetrazoo',
    planningUrl: 'https://docs.google.com/document/d/14vgdRwFpuD-XCJo9-QbgvL-OANyUfkukdQmyj2sftfI/edit#heading=h.wpp7ttkmo633',
  },
  {
    id: uuid(),
    title: 'PlanPal',
    languages: ['HTML5', 'JavaScript'],
    technology: ['Express', 'EJS', 'CSS3', 'MongoDB', 'Mongoose', 'fly.io', 'Git/GitHub'],
    intro: ['The go-to app for seamless and stress-free event coordination with friends.'],
    img: ['src/assets/images/planpal.png'],
    url: 'https://planpal.fly.dev/',
    gitHubUrl: 'https://github.com/kalyntn97/PlanPal',
    planningUrl: 'https://trello.com/b/ypMyZC8Z/palplan',
  },
  {
    id: uuid(),
    title: 'Wandr',
    languages: ['HTML5', 'JavaScript'],
    technology: ['Express', 'React', 'CSS3', 'MongoDB', 'Mongoose', 'Cloudinary', 'fly.io', 'Netlify','Git/GitHub'],
    intro: ['Explore diverse cultures, landscapes, and create lasting memories'],
    img: ['src/assets/images/wandr.png'],
    url: 'https://main--wandr-sei.netlify.app/',
    gitHubUrl: 'https://github.com/kalyntn97/wandr-front-end',
    planningUrl: 'https://trello.com/b/CDqA4iHA/wandr',
  },
  {
    id: uuid(),
    title: 'Project',
    languages: ['HTMl5', 'Python', 'JavaScript'],
    technology: ['SCSS', 'django', 'PostGreSQL', 'Git/GitHub'],
    intro: [],
    img: [],
    url: '',
    gitHubUrl: '',
    planningUrl: '',
  },
  {
    id: uuid(),
    title: 'Tran Nguyen',
    languages: ['HTML5','Typescript'],
    technology: ['SCSS', 'React', 'Git/GitHub'],
    intro: ['A personal portfolio that showcases a visual narrative of a creative journey and expertise'],
    img: ['src/assets/images/portfolio.png'],
    url: '',
    gitHubUrl: 'https://github.com/kalyntn97/tran-portfolio.git',
    planningUrl: 'https://trello.com/b/hdbCUibc/personal-portfolio',
  },
  // {
  //   id: uuid(),
  //   title: 'Placeholder',
  //   languages: [],
  //   technology: [],
  //   intro: [],
  //   img: [],
  //   url: '',
  //   gitHubUrl: '',
  //   planningUrl: '',
  // },
]