import React from "react"
import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero"
import Categories from "../components/Route/Categories"
import BestDeals from "../components/Route/BestDeals"
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts"
import Events from "../components/Events/Events"
import Sponsored from "../components/Route/Sponsored"
import Footer from "../components/Layout/Footer"

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events/>
      <FeaturedProducts />
      <Sponsored />
      <Footer/>
    </div>
  )
}

export default HomePage
