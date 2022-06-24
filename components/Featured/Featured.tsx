import React from 'react'
import { featuredData } from '../../data/featuredData'
import styles from './Featured.module.css'

const Featured = () => {
  return (
    <div className={styles.featured}>
      {featuredData.map(({ cityName, imgSrc, propertyCount }, index) => (
        <div className={styles.featuredItem} key={index}>
          <img src={imgSrc} className={styles.featuredImg} alt={cityName} />
          <div className={styles.featuredTitle}>
            <h1>{cityName}</h1>
            <h1>{propertyCount} properties</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
