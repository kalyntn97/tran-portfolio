export const links = [
  { name: 'mail', href: 'https://mail.google.com/mail/?view=cm&source=mailto&to=[tranhnnguyen13@gmail.com]' },
  { name: 'github', href: 'https://github.com/kalyntn97' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/tran-huynh-nguyen/' },
]

export const getLinkFromName = (name: string) => {
  const link = links.find(link => link.name === name)
  return link ? link.href : null
}


