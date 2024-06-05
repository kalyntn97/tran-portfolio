export const iconSource: { [name: string]: { light: string, dark: string }} = {
  logo: { light: '/assets/images/logo.png', dark: '/assets/images/logo-white.png' },
  github: { light: '/assets/icons/github.png', dark: '/assets/icons/github-white.png' },
  linkedin: { light: '/assets/icons/linkedin.png', dark: '/assets/icons/linkedin-white.png' },
  mail: { light: '/assets/icons/mail.png', dark: '/assets/icons/mail-white.png' },
  note: { light: '/assets/icons/note.png', dark: '/assets/icons/note-white.png' },
  menu: { light: '/assets/icons/menu.png', dark: '/assets/icons/menu-white.png' },
  next: { light: '/assets/icons/next.png', dark: '/assets/icons/next-white.png' },
}

export const LANGUAGES = [
  { name: 'TypeScript', icon: '/assets/icons/typescript.svg'},
  { name: 'JavaScript', icon: '/assets/icons/javascript.svg'},
  { name: 'Python', icon: '/assets/icons/python.svg'},
  { name: 'HTML5', icon: '/assets/icons/html5.svg'},
  { name: 'CSS3', icon: '/assets/icons/css3.svg'},
  // { name: '', icon: '' },
]

export const FRAMEWORKS_AND_LIBRARIES = [
  { name: 'ReactJS', icon: '/assets/icons/react.svg'},
  { name: 'NextJS', icon: '/assets/icons/nextjs.svg'},
  { name: 'React Native', icon: '/assets/icons/react-native.png'},
  { name: 'ExpressJS', icon: '/assets/icons/expressjs.svg'},
  { name: 'Django', icon: '/assets/icons/django.svg'},
  { name: 'Sass', icon: '/assets/icons/sass.svg'},
  { name: 'TailwindCSS', icon: '/assets/icons/tailwind.svg'},
  { name: 'Mongoose', icon: '/assets/icons/mongoose.svg'},
  // { name: '', icon: '' },
]

export const DATABASES_HOSTING = [
  { name: 'MongoDB', icon: '/assets/icons/mongodb.png'},
  { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg'},
  { name: 'Netlify', icon: '/assets/icons/netlify.png' },
  { name: 'Heroku', icon: '/assets/icons/heroku.png' },
  // { name: '', icon: '' },
]

export const OTHERS = [
  { name: 'Git', icon: '/assets/icons/git.svg' },
  { name: 'GitHub', icon: '/assets/icons/github.png' },
  { name: 'Docker', icon: '/assets/icons/docker.svg' },
  { name: 'Postman', icon: '/assets/icons/postman.svg' },
  { name: 'VSCode', icon: '/assets/icons/vscode.png' },
  // { name: '', icon: '' },

]

export const getIconSource = (name: string, mode: 'light' | 'dark') => {
  return iconSource[name][mode] || ''
}

export const navLinks = [
  { name: 'About', title: 'about me', href: '/about', icon: '/assets/images/orange-flower.png' },
  { name: 'Projects', title: 'projects', href: '/projects', icon: '/assets/images/purple-flower.png' },
  { name: 'Contact', title: 'contact', href: '/contact', icon: '/assets/images/yellow-flower.png' },
]

export const FILTERS = [
  {name: 'ReactJS', icon: '/assets/icons/react-inactive.png', activeIcon: '/assets/icons/react-active.png' },
  {name: 'NextJS', icon: '/assets/icons/nextjs-inactive.png', activeIcon: '/assets/icons/nextjs-active.png' },
  {name: 'React Native', icon: '/assets/icons/react-native-inactive.png', activeIcon: '/assets/icons/react-native-active.png' },
  {name: 'Full Stack', icon: '/assets/icons/full-stack-inactive.png', activeIcon: '/assets/icons/full-stack-active.png' },
]
