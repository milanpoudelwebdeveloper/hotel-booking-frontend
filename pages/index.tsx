import { NextPage } from 'next'
import React from 'react'
import Featured from '../components/Featured/Featured'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MailList from '../components/MailList/MailList'
import NavBar from '../components/NavBar/NavBar'
import Category from '../components/PropertiesCategory/Category'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <Category />
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
