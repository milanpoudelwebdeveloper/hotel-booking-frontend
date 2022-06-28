import React from 'react'
import { FaBed, FaCar, FaPlane, FaPlayCircle, FaTaxi } from 'react-icons/fa'
import styles from './Header.module.css'

const StickyHeader = () => {
  return (
    <div className={styles.headerList}>
      <div className={styles.headerListItem}>
        <FaBed />
        <span>Stays</span>
      </div>
      <div className={styles.headerListItem}>
        <FaPlane />
        <span>Flights</span>
      </div>
      <div className={styles.headerListItem}>
        <FaCar />
        <span>Car Rentals</span>
      </div>
      <div className={styles.headerListItem}>
        <FaPlayCircle />
        <span>Attractions</span>
      </div>
      <div className={styles.headerListItem}>
        <FaTaxi />
        <span>Airport Taxis</span>
      </div>
    </div>
  )
}

export default StickyHeader
