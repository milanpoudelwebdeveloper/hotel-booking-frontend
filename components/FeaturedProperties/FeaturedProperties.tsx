import React from 'react'
import { featuredPropertyData } from '../../data/featuredPropertyData'
import styles from './FeaturedProperties.module.css'

const FeaturedProperties = () => {
  return (
    <div>
      <h1>Home guests love</h1>
      <div className={styles.fp}>
        {featuredPropertyData.map(
          ({ id, image, name, location, rating, price }) => (
            <div className={styles.fpItem} key={id}>
              <img src={image} alt={name} className={styles.fpImage} />
              <span className={styles.fpName}>{name}</span>
              <span className={styles.fpLocation}>{location}</span>
              <span className={styles.fpPrice}> Starting from ${price}</span>
              <div className={styles.fpRating}>
                <button className={styles.fpRating}>{rating}</button>
                <span className={styles.fpRatingText}>Excellent</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default FeaturedProperties
