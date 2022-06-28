import React from 'react'
import styles from './Header.module.css'
import SearchSection from './SearchSection'
import StickyHeader from './StickyHeader'

const Header: React.FC<{ type?: string }> = ({ type }) => {
  const searchIsTrue = type === 'search'
  return (
    <div className={styles.header}>
      <div
        className={styles.headerContainer}
        style={{ marginBottom: searchIsTrue ? '25px' : '100px' }}
      >
        <StickyHeader />
        {type !== 'search' && (
          <>
            <h1 className={styles.headerTitle}>
              A lifetime of discounts? It&apos;s Genius
            </h1>
            <p className={styles.headerDesc}>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free booking account
            </p>
            <button className={styles.headerBtn}>Sign In/ Register</button>
            <SearchSection />
          </>
        )}
      </div>
    </div>
  )
}

export default Header
