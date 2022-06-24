import React from 'react'
import { categoryData } from '../../data/categoryData'
import styles from './Category.module.css'

const Category = () => {
  return (
    <div>
      <h1 className={styles.categoryTitle}>Browse by property type</h1>
      <div className={styles.pList}>
        {categoryData.map(({ imgSrc, title, totalCount }, index) => (
          <div className={styles.pItem} key={index}>
            <img className={styles.pListImg} src={imgSrc} alt={title} />
            <div className={styles.listTitles}>
              <h1>{title}</h1>
              <h2>
                {totalCount} {title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
