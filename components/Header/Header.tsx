import React from 'react'
import styles from './Header.module.css'
import { FaBed } from 'react-icons/fa'

import SearchSection from './SearchSection'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerList}>
          <div className={styles.headerListItem}>
            <FaBed />
            <span>Stays</span>
          </div>
          <div className={styles.headerListItem}>
            <FaBed />
            <span>Flights</span>
          </div>
          <div className={styles.headerListItem}>
            <FaBed />
            <span>Car Rentals</span>
          </div>
          <div className={styles.headerListItem}>
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className={styles.headerListItem}>
            <FaBed />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className={styles.headerTitle}>
          A lifetime of discounts? It&apos;s Genius
        </h1>
        <p className={styles.headerDesc}>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free booking account
        </p>
        <button className={styles.headerBtn}>Sign In/ Register</button>
        <SearchSection />
      </div>
    </div>
  )
}

export default Header
