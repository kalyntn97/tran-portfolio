//npm modules
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
//css
import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const form = useRef()
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).then(
      (result) => {
        alert('message sent successfully...')
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    setFormData({name: '', email: '', message: ''})
  }

  return ( 
    <main className={styles.container}>
      <h2>Send me a message!</h2>
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
          type='text' 
          placeholder='Message'
          id='messageInput'
          onChange={handleChange}
          value={formData.message}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}
 
export default ContactForm