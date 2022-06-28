import React from 'react'
import styles from './SearchResultItem.module.css'

interface searchItemProps {
  imgSrc: string
  title: string
  distance: string
  taxiOption: string
  subTitle: string
  features: string[]
  cancelType: string
  cancelSubtitle: string
  rating: number
  price: number
}

const SearchResultItem: React.FC<{ searchItem: searchItemProps }> = ({
  searchItem: {
    imgSrc,
    title,
    distance,
    taxiOption,
    subTitle,
    features,
    cancelSubtitle,
    cancelType,
    rating,
    price,
  },
}) => {
  return (
    <div className={styles.searchItem}>
      <img src={imgSrc} alt="item-image" className={styles.itemImage} />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle}>{title}</h1>
        <span className={styles.siDistance}>{distance}</span>
        <div className={styles.siTexiOp}>{taxiOption}</div>
        <span className={styles.siSubTitle}>{subTitle}</span>
        <span className={styles.siFeatures}>
          {features.map((feature, index) => (
            <span key={index}> {feature}</span>
          ))}
        </span>
        <span className={styles.siCancelOp}>{cancelType}</span>
        <span className={styles.siCancelSubTitle}>{cancelSubtitle}</span>
      </div>
      <div className={styles.siDetails}>
        <div className={styles.siRating}>
          <span>Rating</span>
          <button>{rating}</button>
        </div>
        <div className={styles.siDetailsTexts}>
          <span className={styles.siPrice}>{price}</span>
          <span className={styles.siTaxOp}>Includes taxes and fees</span>
          <button className={styles.availableBtn}>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem
