import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopMovieSlide from './components/TopMovieSlide/TopMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

// 1. 배너 -> popular 영화를 들고와서 첫번째 아이템 보여주기
// 2. popular movie - 완
// 2. top rated - 완
// 4. upcoming - 완 
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
