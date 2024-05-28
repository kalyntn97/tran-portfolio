export const iconSource: { [name: string]: { light: string, dark: string }} = {
  favicon: { light: '/assets/icons/favicon.svg', dark: '/assets/icons/favicon-white.svg' },
  github: { light: '/assets/icons/github.png', dark: '/assets/icons/github-white.png' },
  linkedin: { light: '/assets/icons/linkedin.png', dark: '/assets/icons/linkedin-white.png' },
  mail: { light: '/assets/icons/mail.png', dark: '/assets/icons/mail-white.png' },
  note: { light: '/assets/icons/note.png', dark: '/assets/icons/note-white.png' },
}

export const skillIcons = {
  css3: '/assets/icons/css3.svg',
  django: '/assets/icons/django.svg',
  expressjs: '/assets/icons/expressjs.svg',
  html5: '/assets/icons/html5.svg',
  javaScript: '/assets/icons/javascript.svg', 
  typeScript: '/assets/icons/typescript.svg',
  postgresql: '/assets/icons/postgresql.svg',
  python: '/assets/icons/python.svg',
  react: '/assets/icons/react.svg',
  sass: '/assets/icons/sass.svg',
  nextjs: '',
  reactNative: '',
  tailwind: '',
  mongodb: '/assets/icons/mongodb.svg',
  mongoose: '/assets/icons/mongoose.svg'
}

export const getIconSource = (name: string, mode: 'light' | 'dark') => {
  return iconSource[name][mode] || ''
}

export const navLinks = [
  { name: 'About', title: 'more about me', href: '/about', icon: '/assets/images/orange-flower.png' },
  { name: 'Projects', title: 'my projects', href: '/projects', icon: '/assets/images/purple-flower.png' },
  { name: 'Contact', title: 'contact me', href: '/contact', icon: '/assets/images/yellow-flower.png' },
]
