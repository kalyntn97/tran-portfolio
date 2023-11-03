//npm modules
import { useState } from 'react'
//components
import ContactForm from "../../components/ContactForm/ContactForm"
//css
import styles from './Contact.module.scss'
//assets

const Contact = (props) => {
  props.setShowNavAndFooter(true)


  return ( 
    <main className={styles.container}>
      <ContactForm />
    </main>
   )
}
 
export default Contact