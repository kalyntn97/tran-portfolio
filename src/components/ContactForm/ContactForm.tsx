//npm modules
import { useState, useRef, useContext } from 'react'
import emailjs from '@emailjs/browser'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './ContactForm.module.scss'
import paperPlane from '/assets/icons/paperplane.png'

const ContactForm = () => {
  const { theme } = useContext(ThemeContext)
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form || !form.current) return
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).then(
      (result) => {
        alert('Message sent successfully 🚀')
        console.log(result.text)
        setFormData({name: '', email: '', message: ''})
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return ( 
    <main className={styles.container} data-theme={theme}>
      <h2>Send me a message!</h2>
      {/* // eslint-disable-next-line */}
      <form className={styles.contactForm} onSubmit={handleSubmit} ref={form}>
        <label htmlFor="nameInput">Name</label>
        <input 
          required
          type='text' 
          placeholder='Name' 
          name='name' 
          id='nameInput'
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          required
          type='email' 
          placeholder='Email address' 
          name='email'
          id='emailInput'
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="messageInput">Message</label>
        <textarea
          required
          name='message' 
          placeholder='Message'
          id='messageInput'
          onChange={handleChange}
          value={formData.message}
        />
        <button type='submit'>
          <img src={paperPlane} alt="a paper plane" />
          <span className={styles.word}>Send</span>
        </button>
      </form>
    </main>
  )
}
 
export default ContactForm