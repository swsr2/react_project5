import React, { Suspense } from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopMovieSlide from './components/TopMovieSlide/TopMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'
import { Spinner } from 'react-bootstrap'
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <ErrorBoundary>
        <Suspense fallback={
          <div className='spinner-area'>
            <Spinner
              animation='border'
              variant='danger'
              style={{ width: "5rem", height: "5rem" }}
            />
          </div>
        }>
          <PopularMovieSlide />
          <TopMovieSlide />
          <UpcomingMovieSlide/>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Homepage
