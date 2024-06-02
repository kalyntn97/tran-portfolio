import React from 'react'

import styles from './Loader.module.scss'

function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.text}>loading</span>
      <span className={styles.load}></span>
    </div>
  )
}

export default Loader