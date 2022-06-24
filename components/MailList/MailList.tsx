import React from 'react'
import styles from './MailList.module.css'

const MailList = () => {
  return (
    <div className={styles.mail}>
      <h1 className={styles.mailTitle}>Save time, save money</h1>
      <span className={styles.mailDescription}>
        Sign up and we&apos;ll send best deals to you
      </span>
      <div className={styles.mailInput}>
        <input type="text" placeholder="Enter your mail" />
        <button className={styles.mailButton}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
