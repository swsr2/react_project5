import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopMovieSlide from './components/TopMovieSlide/TopMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopMovieSlide />
      <UpcomingMovieSlide/>
    </div>
  )
}

export default Homepage
